import ProjectCard from "@/components/ProjectCard";
import ThoughtItem from "@/components/ThoughtItem";
import TimelineClient from "@/components/TimelineClient";
import VisitorCount from "@/components/VisitorCount";
import { projects } from "@/data/projects";
import { thoughts } from "@/data/thoughts";

const timeline = [
  {
    date: "2023 — present",
    title: "Software Engineer-in-training",
    sub: "@Northeastern University",
    detail:
      "I love creating things that are both beautiful and functional. From shaping spaces with BIM, GIS, and 3D modeling to shaping code with Python, Java, and React, I've always been drawn to the intersection of creativity and technology,  especially how intelligent systems can spark creativity and extend design thinking into modern life.",
  },
  {
    date: "2021 - 2023",
    title: "Landscape Designer ",
    sub: "@Coen+Partners",
    detail:
      " I worked on everything from intimate residential spaces to large urban planning projects, including The Sports Boulevard, the world's largest linear park. That range taught me that whether the scale is personal or monumental, thoughtful design always begins with people.",
  },
  {
    date: "2018-2020",
    title: "MLA Student learning to design with intention",
    sub: "@University of Virginia",
    detail:
      "Studying Landscape Architecture at UVA taught me to think in systems, stories, and spatial experience. It was where design became more than aesthetics for me, it became a way to understand people, environments, and the quiet decisions that shape how we live.",
  },
  {
    date: "1996 — 2018",
    title: "Growing up, looking outward",
    sub: "@China",
    detail:
      "These were the years of becoming: learning, wandering, questioning, and slowly figuring out what kind of life I wanted to build in the world. I grew up in China surrounded by constant change, and somewhere along the way, curiosity became my compass.",
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-mono">
      {/* Terminal header dots */}
      <div className="flex items-center gap-2 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-800" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
        <span className="text-sm text-stone-400 ml-2 tracking-wide">
          jingjingji.me — living lab
        </span>
      </div>

      {/* About */}
      <section className="mb-14">
        <p className="text-sm font-mono font-medium text-stone-500 dark:text-stone-400 mb-3">
          <span className="text-amber-600 mr-1.5">$</span>about
        </p>
        <h1 className="text-4xl font-semibold tracking-tight mb-5">
          Jingjing Ji
        </h1>
        <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed font-sans mb-2">
          I build things at the edge of systems, memory, and feeling.
        </p>
        <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed font-sans mb-2">
          I'm a{" "}
          <span className="text-stone-900 dark:text-stone-100">
            developer and designer
          </span>{" "}
          who enjoys turning technical ideas into experiences people can
          actually feel. I’m interested not only in what systems generate, but
          in what people remember, imagine, or carry away from those
          generations.
        </p>
        <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed font-sans mb-2">
          This is where I keep my{" "}
          <span className="text-stone-900 dark:text-stone-100">projects</span>,
          experiments, and a few thoughts along the way.
        </p>
        <p className="text-base text-stone-400 dark:text-stone-600 leading-relaxed font-sans mb-7">
          Part portfolio. Part playground. Part organized curiosity.
        </p>
        <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed font-sans mb-2">
          I keep{" "}
          <a
            href="https://toomanytabs.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 dark:text-stone-100 underline underline-offset-2 decoration-amber-400 hover:decoration-amber-600 transition-colors"
          >
            a second space
          </a>{" "}
          for the things that don't fit neatly here. Design tangents, working
          notes, unfinished threads. It's probably a more honest picture of how
          I actually think.
        </p>
        <div className="flex gap-2 flex-wrap">
          {[
            { label: "github ↗", href: "https://github.com/April1029" },
            {
              label: "linkedin ↗",
              href: "https://www.linkedin.com/in/jingjing-ji-a0b579184/",
            },
            { label: "email ↗", href: "mailto:jijingjing2023@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 border border-stone-200 dark:border-stone-800
                         rounded-full text-stone-500 hover:border-amber-500 hover:text-amber-700
                         dark:hover:border-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-14">
        <p className="text-sm font-mono font-medium text-stone-500 dark:text-stone-400 mb-4">
          <span className="text-amber-600 mr-1.5">//</span>projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-14">
        <p className="text-sm font-mono font-medium text-stone-500 dark:text-stone-400 mb-4">
          <span className="text-amber-600 mr-1.5">//</span>timeline
          <span className="text-xs font-normal text-stone-400 dark:text-stone-600 ml-2">
            — click to expand
          </span>
        </p>
        <TimelineClient items={timeline} />
      </section>

      {/* Thoughts */}
      <section className="mb-14">
        <p className="text-sm font-mono font-medium text-stone-500 dark:text-stone-400 mb-4">
          <span className="text-amber-600 mr-1.5">//</span>thoughts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {thoughts.map((t) => (
            <ThoughtItem key={t.slug} t={t} />
          ))}
        </div>
      </section>

      <footer className="pt-6 pb-2 border-t border-stone-200 dark:border-stone-800 flex justify-end">
        <VisitorCount />
      </footer>
    </main>
  );
}
