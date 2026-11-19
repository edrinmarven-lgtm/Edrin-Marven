import type { ReactNode } from 'react';

interface PrincipleItem {
  title: string;
  description: string;
  icon: ReactNode;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    title: 'BESPOKE DESIGN',
    description: 'Spaces shaped around your lifestyle.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" stroke="#A58A62" strokeWidth="1.35" />
        <path d="M3 13H13V21" stroke="#A58A62" strokeWidth="1.35" />
        <path d="M13 3V9H21" stroke="#A58A62" strokeWidth="1.35" />
      </svg>
    ),
  },
  {
    title: 'THOUGHTFUL DETAILS',
    description: 'Every finish, texture and detail considered.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 17L12 21L20 17" stroke="#A58A62" strokeWidth="1.35" />
        <path d="M4 12L12 16L20 12" stroke="#A58A62" strokeWidth="1.35" />
        <path d="M12 3L4 7L12 11L20 7L12 3Z" stroke="#A58A62" strokeWidth="1.35" />
      </svg>
    ),
  },
  {
    title: 'BALANCED LIVING',
    description: 'Beauty designed with everyday function.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="#A58A62" strokeWidth="1.35" />
        <path d="M12 3.5V20.5" stroke="#A58A62" strokeWidth="1.35" />
        <path d="M3.5 12H20.5" stroke="#A58A62" strokeWidth="1.35" />
      </svg>
    ),
  },
  {
    title: 'COMPLETE SERVICE',
    description: 'From the first idea to the final detail.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20V8L12 3L20 8V20H4Z" stroke="#A58A62" strokeWidth="1.35" />
        <path d="M9.5 20V13.5H14.5V20" stroke="#A58A62" strokeWidth="1.35" />
      </svg>
    ),
  },
];

export function DesignPrinciples() {
  return (
    <section
      aria-label="Design Principles"
      className="bg-[#EAE4DA] border-y border-[#D6C8B7]"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D6C8B7]">
          {PRINCIPLES.map((item, idx) => (
            <div
              key={item.title}
              className={`py-7 lg:py-8 flex items-start gap-4 ${
                idx === 0
                  ? 'lg:pr-8'
                  : idx === PRINCIPLES.length - 1
                  ? 'lg:pl-8'
                  : 'lg:px-8'
              } ${idx % 2 === 1 ? 'sm:pl-6 lg:pl-8' : 'sm:pr-6 lg:pr-8'}`}
            >
              <div className="mt-0.5 shrink-0">{item.icon}</div>
              <div>
                <h2 className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1C1B19] mb-1.5">
                  {item.title}
                </h2>
                <p className="text-[13.5px] leading-[1.55] text-[#645D55]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
