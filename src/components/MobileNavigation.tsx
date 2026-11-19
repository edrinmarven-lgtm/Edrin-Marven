import { NAV_ITEMS } from './Header';

interface MobileNavigationProps {
  isOpen: boolean;
  activeId: string;
  onSelect: (sectionId: string) => void;
}

export function MobileNavigation({
  isOpen,
  activeId,
  onSelect,
}: MobileNavigationProps) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-panel"
      className="lg:hidden border-t border-[#D6C8B7] bg-[#F5F2EC] w-full"
    >
      <nav
        aria-label="Mobile Navigation"
        className="px-6 py-6 flex flex-col divide-y divide-[#D6C8B7]/60"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onSelect(item.id);
              }}
              className={`min-h-[46px] flex items-center justify-between text-[12px] uppercase tracking-[0.2em] font-medium transition-colors ${
                isActive ? 'text-[#1C1B19]' : 'text-[#645D55] hover:text-[#1C1B19]'
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="w-6 h-[1.5px] bg-[#A58A62]" aria-hidden="true" />
              )}
            </a>
          );
        })}

        <div className="pt-5">
          <button
            type="button"
            onClick={() => onSelect('contact')}
            className="w-full min-h-[46px] px-6 py-3 text-[11.5px] uppercase tracking-[0.18em] font-medium bg-[#1C1B19] text-[#F5F2EC] hover:bg-[#302922] transition-colors cursor-pointer"
          >
            Book Consultation
          </button>
        </div>
      </nav>
    </div>
  );
}
