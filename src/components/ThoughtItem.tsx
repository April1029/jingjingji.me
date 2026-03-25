"use client";
import { useState } from "react";
import { Thought } from "@/data/thoughts";

export default function ThoughtItem({ t }: { t: Thought }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((o) => !o)}
      className="border border-stone-200 dark:border-stone-800 rounded-xl p-4
                 cursor-pointer transition-colors hover:border-stone-300
                 dark:hover:border-stone-700"
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={`${t.title} — ${t.tag}, ${t.date}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-mono text-stone-400 tracking-wide">
          {t.date}
        </span>
        <span
          className="text-xs font-mono px-2 py-0.5 bg-stone-100
                         dark:bg-stone-800 text-stone-400 rounded"
        >
          {t.tag}
        </span>
      </div>
      <div className="text-base font-semibold mb-1.5">{t.title}</div>
      <div className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-sans">
        {t.preview}
      </div>
      {open && (
        <div
          className="mt-4 text-sm text-stone-500 dark:text-stone-400 leading-relaxed
                        font-sans border-l-2 border-amber-500/30 pl-3 pt-4
                        border-t border-stone-100 dark:border-stone-800"
        >
          {t.body}
        </div>
      )}
      <div className="mt-3 text-xs font-mono text-stone-300 dark:text-stone-600">
        {open ? "↑ collapse" : "↓ read more"}
      </div>
    </div>
  );
}
