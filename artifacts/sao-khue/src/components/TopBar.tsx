import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-accent" />
            <span className="font-semibold">0936 045 268 - 0909 075 668</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-accent" />
            <span>kientrucsaokhue@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-accent" />
            <span>245/8 Bình Lợi, P. 13, Q. Bình Thạnh, TP.HCM</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-accent" />
            <span>Giờ làm việc: 8:00 - 17:30</span>
          </div>
          <div className="flex items-center space-x-3 ml-4 border-l border-primary-foreground/20 pl-4">
            <a href="https://facebook.com/kientrucsaokhue" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Youtube size={16} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
