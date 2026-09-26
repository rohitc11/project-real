import { Logo } from "@/components/brand/Logo";
import { SITE, emailUrl, phoneUrl, whatsappUrl } from "@/config/site";

const linkClass = "transition-colors hover:text-cloud";

// Deep ink — the "dusk" at the end of every page.
export function Footer() {
  return (
    <footer className="bg-ink text-cloud">
      <div className="shell py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo className="text-3xl" />
            <p className="mt-3 text-cloud/55">{SITE.tagline}</p>
          </div>
          <ul className="flex flex-col gap-2 text-lg text-cloud/80 md:items-end">
            <li>
              <a href={emailUrl} className={linkClass}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={phoneUrl} className={linkClass}>
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-6 border-t border-cloud/15 pt-6 text-sm text-cloud/55 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <ul className="flex gap-6">
            <li>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram
              </a>
            </li>
            <li>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
