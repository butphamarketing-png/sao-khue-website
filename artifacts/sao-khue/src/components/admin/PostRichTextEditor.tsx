import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Eraser,
  Heading2,
  Heading3,
  ImagePlus,
  Italic,
  Link2,
  Table2,
  Youtube,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Strikethrough,
  Underline,
} from "lucide-react";
import {
  buildImageHtml,
  ImageInsertDialog,
  parseImageElement,
  type ImageInsertValues,
} from "@/components/admin/ImageInsertDialog";
import { LinkInsertDialog } from "@/components/admin/LinkInsertDialog";
import { YoutubeInsertDialog } from "@/components/admin/YoutubeInsertDialog";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
  imageFolder?: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function normalizeContentForEditor(content: string): string {
  const trimmed = content.trim();
  if (!trimmed) return "";
  if (/<[a-z][\s\S]*>/i.test(trimmed)) return trimmed;
  return trimmed
    .split(/\n+/)
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function ToolbarButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-white text-slate-700 transition hover:border-[#17579d] hover:bg-[#eef6ff] hover:text-[#17579d]"
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return <span className="mx-0.5 h-6 w-px shrink-0 bg-slate-200" aria-hidden />;
}

export function PostRichTextEditor({
  value,
  onChange,
  placeholder = "Nhập nội dung bài viết…",
  minHeight = "400px",
  imageFolder = "posts",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const editingImgRef = useRef<HTMLImageElement | null>(null);
  const syncing = useRef(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [imageDialogInitial, setImageDialogInitial] = useState<Partial<ImageInsertValues>>();
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [youtubeDialogOpen, setYoutubeDialogOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || syncing.current) return;
    const normalized = normalizeContentForEditor(value);
    if (el.innerHTML !== normalized) {
      el.innerHTML = normalized;
    }
  }, [value]);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    syncing.current = true;
    const html = el.innerHTML.replace(/<div>/gi, "<p>").replace(/<\/div>/gi, "</p>");
    onChange(html);
    requestAnimationFrame(() => {
      syncing.current = false;
    });
  }, [onChange]);

  const run = (command: string, arg?: string) => {
    ref.current?.focus();
    document.execCommand(command, false, arg);
    sync();
  };

  const insertHtml = (html: string) => {
    ref.current?.focus();
    document.execCommand("insertHTML", false, html);
    sync();
  };

  const openInsertImage = (initial?: Partial<ImageInsertValues>) => {
    editingImgRef.current = null;
    setImageDialogInitial(initial);
    setImageDialogOpen(true);
  };

  const handleImageConfirm = (values: ImageInsertValues) => {
    const html = buildImageHtml(values);
    if (!html) return;

    const existing = editingImgRef.current;
    if (existing) {
      existing.setAttribute("src", values.url.trim());
      if (values.alt.trim()) existing.setAttribute("alt", values.alt.trim());
      else existing.removeAttribute("alt");
      if (values.width.trim()) existing.setAttribute("width", values.width.trim());
      else existing.removeAttribute("width");
      if (values.height.trim()) existing.setAttribute("height", values.height.trim());
      else existing.removeAttribute("height");
      existing.style.cssText = "";
      if (values.align === "center") {
        existing.style.display = "block";
        existing.style.margin = "1rem auto";
        existing.style.maxWidth = "100%";
      } else if (values.align === "left") {
        existing.style.float = "left";
        existing.style.margin = "0 1rem 1rem 0";
        existing.style.maxWidth = "100%";
      } else if (values.align === "right") {
        existing.style.float = "right";
        existing.style.margin = "0 0 1rem 1rem";
        existing.style.maxWidth = "100%";
      } else {
        existing.style.maxWidth = "100%";
        existing.style.height = "auto";
      }
      existing.setAttribute("loading", "lazy");
      existing.setAttribute("decoding", "async");
      editingImgRef.current = null;
      sync();
      return;
    }

    insertHtml(html);
  };

  const insertLink = (url: string, openNewTab: boolean) => {
    ref.current?.focus();
    const sel = window.getSelection();
    const hasSelection = sel && !sel.isCollapsed;
    if (hasSelection) {
      document.execCommand("createLink", false, url);
      if (openNewTab) {
        const anchor = sel?.anchorNode?.parentElement?.closest("a");
        anchor?.setAttribute("target", "_blank");
        anchor?.setAttribute("rel", "noopener noreferrer");
      }
    } else {
      const target = openNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
      insertHtml(`<a href="${url.replace(/"/g, "&quot;")}"${target}>${url}</a>`);
    }
    sync();
  };

  const insertTable = () => {
    const rows = [
      ["Cột 1", "Cột 2", "Cột 3"],
      ["", "", ""],
      ["", "", ""],
    ];
    const head = rows[0]
      .map((c) => `<th style="border:1px solid #e2e8f0;padding:8px;background:#f8fafc;">${c}</th>`)
      .join("");
    const body = rows
      .slice(1)
      .map(
        (row) =>
          `<tr>${row.map((c) => `<td style="border:1px solid #e2e8f0;padding:8px;">${c || "&nbsp;"}</td>`).join("")}</tr>`,
      )
      .join("");
    insertHtml(
      `<table style="width:100%;border-collapse:collapse;margin:1rem 0;"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`,
    );
  };

  const onPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
    sync();
  };

  const onEditorClick = (e: React.MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLImageElement && ref.current?.contains(target)) {
      editingImgRef.current = target;
      setImageDialogInitial(parseImageElement(target));
      setImageDialogOpen(true);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
        <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-[#f8f9fa] px-2 py-1.5">
          <ToolbarButton label="Đoạn văn" onClick={() => run("formatBlock", "p")}>
            <Pilcrow size={15} />
          </ToolbarButton>
          <ToolbarButton label="Tiêu đề H2" onClick={() => run("formatBlock", "h2")}>
            <Heading2 size={15} />
          </ToolbarButton>
          <ToolbarButton label="Tiêu đề H3" onClick={() => run("formatBlock", "h3")}>
            <Heading3 size={15} />
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton label="In đậm" onClick={() => run("bold")}>
            <Bold size={15} />
          </ToolbarButton>
          <ToolbarButton label="In nghiêng" onClick={() => run("italic")}>
            <Italic size={15} />
          </ToolbarButton>
          <ToolbarButton label="Gạch chân" onClick={() => run("underline")}>
            <Underline size={15} />
          </ToolbarButton>
          <ToolbarButton label="Gạch ngang" onClick={() => run("strikeThrough")}>
            <Strikethrough size={15} />
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton label="Căn trái" onClick={() => run("justifyLeft")}>
            <AlignLeft size={15} />
          </ToolbarButton>
          <ToolbarButton label="Căn giữa" onClick={() => run("justifyCenter")}>
            <AlignCenter size={15} />
          </ToolbarButton>
          <ToolbarButton label="Căn phải" onClick={() => run("justifyRight")}>
            <AlignRight size={15} />
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton label="Danh sách gạch đầu dòng" onClick={() => run("insertUnorderedList")}>
            <List size={15} />
          </ToolbarButton>
          <ToolbarButton label="Danh sách số" onClick={() => run("insertOrderedList")}>
            <ListOrdered size={15} />
          </ToolbarButton>
          <ToolbarButton label="Đường kẻ ngang" onClick={() => run("insertHorizontalRule")}>
            <Minus size={15} />
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton label="Chèn liên kết" onClick={() => setLinkDialogOpen(true)}>
            <Link2 size={15} />
          </ToolbarButton>
          <ToolbarButton label="Chèn bảng" onClick={insertTable}>
            <Table2 size={15} />
          </ToolbarButton>
          <ToolbarButton label="Chèn YouTube" onClick={() => setYoutubeDialogOpen(true)}>
            <Youtube size={15} />
          </ToolbarButton>
          <ToolbarButton label="Chèn / sửa ảnh" onClick={() => openInsertImage()}>
            <ImagePlus size={15} />
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton label="Xóa định dạng" onClick={() => run("removeFormat")}>
            <Eraser size={15} />
          </ToolbarButton>
        </div>
        <div
          ref={ref}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline
          data-placeholder={placeholder}
          onInput={sync}
          onBlur={sync}
          onPaste={onPaste}
          onClick={onEditorClick}
          className="prose-article max-w-none bg-white px-3 py-3 text-[15px] leading-relaxed text-slate-800 outline-none focus:ring-2 focus:ring-inset focus:ring-[#17579d]/15 empty:before:pointer-events-none empty:before:text-slate-400 empty:before:content-[attr(data-placeholder)] [&_img]:cursor-pointer [&_img]:rounded [&_img]:ring-offset-2 hover:[&_img]:ring-2 hover:[&_img]:ring-[#17579d]/40"
          style={{ minHeight }}
        />
        <p className="border-t border-slate-100 px-3 py-2 text-xs text-slate-500">
          Bấm biểu tượng ảnh để chèn — bấm lại ảnh trong bài để sửa alt/kích thước (SEO).
        </p>
      </div>

      <ImageInsertDialog
        open={imageDialogOpen}
        onOpenChange={setImageDialogOpen}
        initial={imageDialogInitial}
        imageFolder={imageFolder}
        onConfirm={handleImageConfirm}
      />
      <LinkInsertDialog
        open={linkDialogOpen}
        onOpenChange={setLinkDialogOpen}
        onConfirm={insertLink}
      />
      <YoutubeInsertDialog
        open={youtubeDialogOpen}
        onOpenChange={setYoutubeDialogOpen}
        onConfirm={(html) => insertHtml(html)}
      />
    </>
  );
}
