export type Thought = {
  slug: string;
  date: string;
  tag: string;
  title: string;
  preview: string;
  body: string;
};

export const thoughts: Thought[] = [
  {
    slug: "still-here",
    date: "Feb 2026",
    tag: "design",
    title: "Calm is hard to design",
    preview: "The second you try to force calm, it stops being calm.",
    body: `Designing for calm sounds simple until you actually try it. The temptation is to explain, coach, optimize, and reward. But calm rarely comes from instruction. More often, it comes from making space for someone to arrive on their own.`,
  },
  {
    slug: "ephemeral-things",
    date: "Apr 2025",
    tag: "personal",
    title: "I keep coming back to ephemeral things",
    preview: "Maybe because the temporary often feels the most alive.",
    body: `I’m drawn to ideas that resist being pinned down: memory, atmosphere, movement, presence. Maybe it’s because so much of modern life is built around capture and permanence. I find more joy in things/moments that flickers, shifts, and disappears.`,
  },
  {
    slug: "ephemeral-things",
    date: "Apr 2025",
    tag: "design",
    title: "Presence is a design material too",
    preview:
      "Not everything meaningful has to be interactive in the obvious way.",
    body: `Some of my favorite experiences don’t do very much, at least not visibly. They shift tone. They wait. They respond lightly. They create a sense that something is there with you. I think software can be designed with that kind of presence in mind.`,
  },
  {
    slug: "modern-clippy",
    date: "Apr 2025",
    tag: "reflection",
    title: "Answers are cheap now",
    preview:
      "What matters is whether a tool helps you think, not just finish faster.",
    body: `We live in a moment where almost any answer is one prompt away. That changes the value of tools. I’m less interested in systems that produce instant output, and more interested in ones that preserve curiosity, friction, and understanding.`,
  },
  {
    slug: "modern-clippy",
    date: "Mar 2025",
    tag: "reflection",
    title: "A prompt is not a process",
    preview: "Getting an answer is not the same as building understanding.",
    body: `Prompt-driven tools are powerful, but they can make the work look simpler than it really is. Real problem-solving still involves judgment, iteration, doubt, and structure. ONLY tools that respect that complexity instead of pretending to skip it will succeed in this era.`,
  },
];
