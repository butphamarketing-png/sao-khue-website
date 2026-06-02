import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, ArrowRight, Map, Clock } from "lucide-react";
import { SiMessenger } from "react-icons/si";
import {
  facebookUrlsFromSettings,
  messengerUrlsFromSettings,
  resolveGoogleMapsOpenUrl,
} from "@/lib/social-links";
import { Link } from "wouter";
import { BrandLogo } from "@/components/BrandLogo";
import { MapEmbed } from "@/components/MapEmbed";
import {
  useGoogleMapEmbed,
  useSiteSettings,
  telHref,
  useNavMenu,
  useTopBarSlogan,
  usePrimaryPhone,
} from "@/lib/site-settings";

export function Footer() {
  const s = useSiteSettings();
  const facebookUrls = facebookUrlsFromSettings(s);
  const messengerUrls = messengerUrlsFromSettings(s);
  const mapsOpenUrl = resolveGoogleMapsOpenUrl(s);
  const mapEmbed = useGoogleMapEmbed();
  const menu = useNavMenu();
  const slogan = useTopBarSlogan();
  const phone = usePrimaryPhone();

  const serviceMenu = menu.find((m) => m.category === "dich-vu");

  const experienceMenu = menu.find((m) => m.category === "kinh-nghiem");



  return (

    <footer className="relative border-t-4 border-accent bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 pb-24 pt-16 text-slate-300 md:pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="site-container">

        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <div className="logo-footer-wrap">
              <BrandLogo
                src={s.logoUrl}
                alt={s.companyName}
                className="logo-footer-img"
              />
            </div>

            <h3 className="mb-2 text-lg font-bold text-white">{s.companyName}</h3>

            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">

              {slogan}

            </p>

            <p className="mb-4 text-sm leading-relaxed">{s.footerDescription}</p>

            <div className="space-y-3 text-sm">

              {s.address1 && (

                <div className="flex items-start gap-3">

                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

                  <span>

                    <strong className="text-white">Trụ sở:</strong> {s.address1}

                  </span>

                </div>

              )}

              {s.address2 && (

                <div className="flex items-start gap-3">

                  <Map className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

                  <span>

                    <strong className="text-white">VP:</strong> {s.address2}

                  </span>

                </div>

              )}

              {phone && (
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <strong className="text-white">Hotline:</strong>{" "}
                    <a href={telHref(phone)} className="hover:text-accent">
                      {phone}
                    </a>
                  </span>
                </div>
              )}

              {s.email && (

                <div className="flex items-start gap-3">

                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

                  <span>

                    <strong className="text-white">Email:</strong>{" "}

                    <a href={`mailto:${s.email}`} className="hover:text-accent">

                      {s.email}

                    </a>

                  </span>

                </div>

              )}

              <div className="flex items-start gap-3">

                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

                <span>

                  <strong className="text-white">Giờ làm việc:</strong> {s.workingHours || "T2–T7, 8:00–17:30"}

                </span>

              </div>

            </div>

          </div>



          <div>

            <h3 className="relative mb-6 inline-block text-xl font-bold text-white">

              LIÊN KẾT NHANH

              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded bg-accent" />

            </h3>

            <ul className="mt-4 space-y-3">

              {menu

                .filter((m) => m.href !== "/")

                .map((m) => (

                  <li key={m.href}>

                    <Link

                      href={m.href}

                      className="flex items-center transition-colors hover:text-accent"

                    >

                      <ArrowRight className="mr-2 h-4 w-4" /> {m.title}

                    </Link>

                  </li>

                ))}

              <li>

                <Link href="/gioi-thieu" className="flex items-center transition-colors hover:text-accent">

                  <ArrowRight className="mr-2 h-4 w-4" /> GIỚI THIỆU

                </Link>

              </li>

              <li>

                <Link href="/cong-trinh" className="flex items-center transition-colors hover:text-accent">

                  <ArrowRight className="mr-2 h-4 w-4" /> CÔNG TRÌNH

                </Link>

              </li>

            </ul>

          </div>



          <div>

            <h3 className="relative mb-6 inline-block text-xl font-bold text-white">

              DỊCH VỤ

              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded bg-accent" />

            </h3>

            <ul className="mt-4 space-y-3">

              {serviceMenu?.children?.map((c) => (

                <li key={c.href}>

                  <Link href={c.href} className="flex items-center transition-colors hover:text-accent">

                    <ArrowRight className="mr-2 h-4 w-4" /> {c.title}

                  </Link>

                </li>

              ))}

            </ul>

            {experienceMenu?.children && (

              <>

                <h3 className="relative mb-4 mt-8 inline-block text-lg font-bold text-white">

                  KINH NGHIỆM

                </h3>

                <ul className="space-y-2">

                  {experienceMenu.children.map((c) => (

                    <li key={c.href}>

                      <Link href={c.href} className="flex items-center text-sm transition-colors hover:text-accent">

                        <ArrowRight className="mr-2 h-3 w-3" /> {c.title}

                      </Link>

                    </li>

                  ))}

                </ul>

              </>

            )}

          </div>



          <div>

            <h3 className="relative mb-6 inline-block text-xl font-bold text-white">

              BẢN ĐỒ

              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded bg-accent" />

            </h3>

            <a

              href={mapsOpenUrl ?? `https://maps.google.com/?q=${encodeURIComponent(s.address1)}`}

              target="_blank"

              rel="noreferrer"

              className="group relative mt-4 block h-48 overflow-hidden rounded-lg border border-slate-700 bg-slate-800"

            >

              <MapEmbed
                embedHtml={mapEmbed}
                address={s.address1}
                title="Bản đồ"
                className="pointer-events-none h-full w-full border-0 opacity-80 transition group-hover:opacity-100"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 p-4 text-center opacity-0 transition group-hover:opacity-100">

                <MapPin className="mb-2 h-8 w-8 text-accent" />

                <span className="text-sm font-semibold text-white">Xem trên Google Maps</span>

              </div>

            </a>



            <div className="mt-6 flex flex-wrap gap-3">

              {facebookUrls.map((url, index) => (

                <a

                  key={`fb-${index}-${url}`}

                  href={url}

                  target="_blank"

                  rel="noreferrer"

                  aria-label={facebookUrls.length > 1 ? `Facebook ${index + 1}` : "Facebook"}

                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-accent hover:text-white"

                >

                  <Facebook size={20} />

                </a>

              ))}

              {messengerUrls.map((url, index) => (

                <a

                  key={`messenger-${index}-${url}`}

                  href={url}

                  target="_blank"

                  rel="noreferrer"

                  aria-label={messengerUrls.length > 1 ? `Messenger ${index + 1}` : "Messenger"}

                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0084ff] transition-colors hover:bg-[#006fd6]"

                >

                  <SiMessenger size={20} />

                </a>

              ))}

              {s.youtubeUrl && (

                <a

                  href={s.youtubeUrl}

                  target="_blank"

                  rel="noreferrer"

                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-accent hover:text-white"

                >

                  <Youtube size={20} />

                </a>

              )}

              {s.instagramUrl && (

                <a

                  href={s.instagramUrl}

                  target="_blank"

                  rel="noreferrer"

                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-accent hover:text-white"

                >

                  <Instagram size={20} />

                </a>

              )}

            </div>

          </div>

        </div>



        <div className="flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-center text-sm text-slate-500 md:flex-row">

          <p>

            &copy; {new Date().getFullYear()} {s.companyName}. All rights reserved. Website Design By{" "}
            <a
              href="https://butphamarketing.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition hover:text-white"
            >
              Butphamarketing.com
            </a>

          </p>

          <p className="mt-2 md:mt-0">

            {s.taxCode ? `MST: ${s.taxCode} | ` : ""}

            Thiết kế & thi công xây dựng trọn gói TP.HCM

          </p>

        </div>

      </div>

    </footer>

  );

}

