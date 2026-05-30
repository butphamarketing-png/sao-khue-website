import { Router, type IRouter, type Request, type Response } from "express";
import multer from "multer";
import crypto from "node:crypto";
import path from "node:path";
import { isAdmin } from "../lib/auth";
import {
  getPublicStorageUrl,
  getStorageBucket,
  getSupabaseAdmin,
  isSupabaseStorageEnabled,
} from "../lib/supabase";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_TYPES.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Chi ho tro anh JPG, PNG, WebP, GIF, SVG (toi da 8MB)"));
    }
  },
});

const router: IRouter = Router();

function requireAdmin(req: Request, res: Response): boolean {
  if (!req.isAuthenticated() || !isAdmin(req.user)) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

router.post(
  "/uploads",
  (req, res, next) => {
    if (!requireAdmin(req, res)) return;
    if (!isSupabaseStorageEnabled()) {
      res.status(503).json({
        error:
          "Supabase Storage chua cau hinh. Dat SUPABASE_URL va SUPABASE_SERVICE_ROLE_KEY tren server.",
      });
      return;
    }
    next();
  },
  upload.single("file"),
  async (req: Request, res: Response) => {
    try {
      const file = req.file;
      if (!file) {
        res.status(400).json({ error: "Khong co file anh" });
        return;
      }

      const ext = path.extname(file.originalname).toLowerCase() || ".jpg";
      const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"].includes(ext)
        ? ext
        : ".jpg";
      const folder = typeof req.body?.folder === "string" ? req.body.folder.replace(/[^a-z0-9-]/gi, "") : "uploads";
      const objectPath = `${folder}/${Date.now()}-${crypto.randomBytes(6).toString("hex")}${safeExt}`;

      const supabase = getSupabaseAdmin();
      const bucket = getStorageBucket();

      const { error } = await supabase.storage
        .from(bucket)
        .upload(objectPath, file.buffer, {
          contentType: file.mimetype,
          upsert: false,
        });

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.json({
        url: getPublicStorageUrl(objectPath),
        path: objectPath,
        bucket,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed";
      res.status(500).json({ error: message });
    }
  },
);

export default router;
