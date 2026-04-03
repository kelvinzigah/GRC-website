import { useState } from 'react';
import { cn } from '../../utils/cn';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-cream/10 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-cream transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
        aria-expanded={open}
      >
        <span>{title}</span>
        <svg
          className={cn('h-5 w-5 flex-shrink-0 transition-transform duration-200', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <p className="text-cream/70 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export function Accordion({ items, className }) {
  return (
    <div className={cn('divide-y divide-cream/10', className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} defaultOpen={index === 0}>
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}
