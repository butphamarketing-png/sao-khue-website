import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram } from "lucide-react";
import { useSiteSettings } from "@/lib/site-settings";

export function TopBar() {
  const s = useSiteSettings();
  const phones = [s.hotline1, s.hotline2].filter(Boolean).join(" - ");
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          {phones && (
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-accent" />
              <span className="font-semibold">{phones}</span>
            </div>
          )}
          {s.email && (
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-accent" />
              <span>{s.email}</span>
            </div>
          )}
          {s.address1 && (
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-accent" />
              <span>{s.address1}</span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {s.workingHours && (
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-accent" />
              <span>Giờ làm việc: {s.workingHours}</span>
            </div>
          )}
          <div className="flex items-center space-x-3 ml-4 border-l border-primary-foreground/20 pl-4">
            {s.facebookUrl && (
              <a href={s.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={16} />
              </a>
            )}
            {s.youtubeUrl && (
              <a href={s.youtubeUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                <Youtube size={16} />
              </a>
            )}
            {s.instagramUrl && (
              <a href={s.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
