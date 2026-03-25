"use client";
import { useState } from "react";
import { Project } from "@/data/projects";
import { ytThumb, ytUrl } from "@/lib/youtube";

export default function ProjectCard({ p }: { p: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbSrc = p.youtubeId ? ytThumb(p.youtubeId) : null;

  if (p.placeholder) {
    return (
      <div className="flex items-center justify-center border border-dashed border-stone-200
                       dark:border-stone-800 rounded-xl p-8 text-stone-400 dark:text-stone-600
                       font-mono text-sm italic">
        to be continued...
      </div>
    );
  }

  const links: { label: string; href: string }[] = [];
  if (p.youtubeId) links.push({ label: `▶ ${p.videoLabel ?? "demo"}`, href: ytUrl(p.youtubeId) });
  if (p.websiteUrl) links.push({ label: "↗ site", href: p.websiteUrl });
  if (p.githubUrl) links.push({ label: "{ } code", href: p.githubUrl });

  return (
    <>
      <div
        className="group flex flex-col border border-stone-200 dark:border-stone-800
                   rounded-xl overflow-hidden transition-all duration-200
                   hover:border-amber-500 hover:-translate-y-0.5"
      >
        {/* Thumbnail area */}
        <div
          className="relative w-full bg-stone-100 dark:bg-stone-900 overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          {thumbSrc ? (
            <img
              src={thumbSrc}
              alt={p.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-stone-400 font-mono text-lg">
              {"{ }"}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 gap-2.5">
          <div className="text-base font-semibold">{p.name}</div>
          <div className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed flex-1 font-sans">
            {p.description}
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2 mt-1">
            <div className="flex flex-wrap gap-1">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-stone-100 dark:bg-stone-800
                             text-stone-500 dark:text-stone-400 rounded font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 items-center">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-mono text-amber-700 dark:text-amber-400
                             hover:text-amber-900 dark:hover:text-amber-300 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              {p.imageSrc && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                  className="text-xs font-mono text-amber-700 dark:text-amber-400
                             hover:text-amber-900 dark:hover:text-amber-300 transition-colors"
                >
                  ★ finalist
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && p.imageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={p.imageSrc}
            alt={`${p.name} finalist announcement`}
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
