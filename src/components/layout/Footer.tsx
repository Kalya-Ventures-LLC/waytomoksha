import Link from "next/link";

const footerLinks = [
  { label: "Home",           href: "/"               },
  { label: "Daily Sessions", href: "/daily-sessions" },
  { label: "Retreats",       href: "/retreats"       },
  { label: "PWA Apps",       href: "/pwa-apps"       },
  { label: "Donations",      href: "/donations"      },
  { label: "Contact Us",     href: "/contact"        },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-navy)] text-white"
      aria-label="Site footer"
    >
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold mb-2">Way To Moksha</p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              A spiritual community dedicated to inner peace, meditation, and
              the journey towards liberation.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-teal-light)] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-[var(--color-teal-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact stub */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-teal-light)] mb-4">
              Get In Touch
            </p>
            <address className="not-italic text-sm text-slate-300 flex flex-col gap-2">
              <span>📧 info@waytomoksha.org</span>
              <span>📞 +91 00000 00000</span>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-slate-400">
          © {year} Way To Moksha. All rights reserved. |{" "}
          <Link href="/contact" className="hover:text-[var(--color-teal-light)] transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
