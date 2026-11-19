import { Instagram, Linkedin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { NAV_ITEMS } from './Header';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export function Footer({ onNavigate, onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#1C1B19] text-[#F5F2EC] pt-16 sm:pt-20 pb-10 border-t border-[#302922]">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#F5F2EC]/12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block mb-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58A62]"
            >
              <BrandLogo variant="footer" tone="ivory" />
            </a>
            <p className="font-serif italic text-[19px] text-[#EAE4DA]/90 max-w-[30ch] leading-relaxed">
              “Thoughtful interiors. Beautifully lived in.”
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="lg:col-span-3">
            <h2 className="text-[10.5px] uppercase tracking-[0.22em] text-[#A58A62] font-medium mb-5">
              Navigation
            </h2>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="text-[14px] text-[#EAE4DA]/85 hover:text-[#F5F2EC] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-[10.5px] uppercase tracking-[0.22em] text-[#A58A62] font-medium mb-5">
              Contact
            </h2>
            <ul className="space-y-3 text-[14px] text-[#EAE4DA]/85">
              <li>
                <a
                  href="mailto:hello@aurellestudio.com"
                  className="hover:text-[#F5F2EC] transition-colors"
                >
                  hello@aurellestudio.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15550000000"
                  className="hover:text-[#F5F2EC] transition-colors tabular-nums"
                >
                  +1 (555) 000-0000
                </a>
              </li>
              <li className="text-[#C2AE98] pt-1">
                Serving the United States and beyond
              </li>
            </ul>
          </div>

          {/* Column 4 — Social */}
          <div className="lg:col-span-2">
            <h2 className="text-[10.5px] uppercase tracking-[0.22em] text-[#A58A62] font-medium mb-5">
              Social
            </h2>
            <ul className="space-y-3 text-[14px] text-[#EAE4DA]/85">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 hover:text-[#F5F2EC] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#A58A62]" strokeWidth={1.4} aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 hover:text-[#F5F2EC] transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="text-[#A58A62]"
                  >
                    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
                    <path
                      d="M10.5 18L11.7 13.4M11.7 13.4C11.3 12.8 11.2 11.9 11.5 11.1C11.9 10.1 13 9.7 13.9 10.2C14.7 10.7 14.9 12 14.3 13C13.8 13.8 12.6 14 11.7 13.4Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Pinterest</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 hover:text-[#F5F2EC] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#A58A62]" strokeWidth={1.4} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-[#C2AE98]">
          <p>© 2026 AURELLE STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#F5F2EC] transition-colors cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#F5F2EC] transition-colors cursor-pointer"
            >
              TERMS OF SERVICE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
