"use client";
import { useState } from "react";

type TLItem = { date: string; title: string; sub: string; detail: string };

export default function TimelineClient({ items }: { items: TLItem[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex gap-3 cursor-pointer"
          onClick={() => toggle(i)}
          role="button"
          tabIndex={0}
          aria-expanded={open.has(i)}
          aria-label={`${item.title} — ${item.sub}, ${item.date}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle(i);
            }
          }}
        >
          {/* Spine */}
          <div className="flex flex-col items-center w-4 flex-shrink-0">
            <div
              className={`w-2 h-2 rounded-full border mt-1.5 flex-shrink-0 transition-colors
              ${
                open.has(i)
                  ? "border-amber-500 bg-amber-500"
                  : "border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950"
              }`}
            />
            {i < items.length - 1 && (
              <div className="flex-1 w-px bg-stone-200 dark:bg-stone-800 min-h-[14px]" />
            )}
          </div>

          {/* Content */}
          <div className="pb-5 flex-1">
            <div className="text-xs font-mono text-stone-400 tracking-wide">
              {item.date}
            </div>
            <div className="text-base font-semibold mt-0.5">{item.title}</div>
            <div className="text-sm text-stone-500 dark:text-stone-400">
              {item.sub}
            </div>
            {open.has(i) && (
              <div
                className="mt-3 text-sm text-stone-500 dark:text-stone-400 leading-relaxed
                              font-sans border-l-2 border-amber-500/30 pl-3"
              >
                {item.detail}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
