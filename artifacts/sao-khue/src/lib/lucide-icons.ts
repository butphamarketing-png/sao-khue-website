import type { LucideIcon } from "lucide-react";
import {
  Award,
  Building2,
  ClipboardCheck,
  Clock,
  DollarSign,
  FileText,
  Hammer,
  HardHat,
  MapPin,
  PencilRuler,
  PhoneCall,
  Shield,
  ShieldCheck,
  ThumbsUp,
  Users,
  Zap,
  FileX2,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "building-2": Building2,
  building2: Building2,
  "hard-hat": HardHat,
  hardhat: HardHat,
  users: Users,
  "shield-check": ShieldCheck,
  shieldcheck: ShieldCheck,
  shield: Shield,
  "phone-call": PhoneCall,
  phonecall: PhoneCall,
  "clipboard-check": ClipboardCheck,
  clipboardcheck: ClipboardCheck,
  "pencil-ruler": PencilRuler,
  pencilruler: PencilRuler,
  "file-text": FileText,
  filetext: FileText,
  hammer: Hammer,
  clock: Clock,
  "map-pin": MapPin,
  mappin: MapPin,
  "dollar-sign": DollarSign,
  dollarsign: DollarSign,
  award: Award,
  "thumbs-up": ThumbsUp,
  thumbsup: ThumbsUp,
  zap: Zap,
  "file-x-2": FileX2,
  filex2: FileX2,
};

export function resolveLucideIcon(name?: string, fallback: LucideIcon = ShieldCheck): LucideIcon {
  if (!name) return fallback;
  const key = name.trim().toLowerCase().replace(/_/g, "-");
  return iconMap[key] ?? iconMap[key.replace(/-/g, "")] ?? fallback;
}

export const ICON_OPTIONS = [
  "building-2",
  "hard-hat",
  "users",
  "shield-check",
  "phone-call",
  "clipboard-check",
  "pencil-ruler",
  "file-text",
  "hammer",
  "shield",
  "clock",
  "map-pin",
  "dollar-sign",
  "award",
  "thumbs-up",
  "zap",
  "file-x-2",
];
