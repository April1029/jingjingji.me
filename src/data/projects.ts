export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  youtubeId?: string;
  videoLabel?: string;
  githubUrl?: string;
  websiteUrl?: string;
  imageSrc?: string;
  placeholder?: boolean;
  date?: string;
  slidesUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "Iris",
    name: "Iris",
    description:
      "A short film unfolds in a world where everything is made smooth, seamless, and right—until one thing isn’t. In that rupture, it becomes a story about loss, perception, and what it means to feel without correction.",
    tags: ["AI-Filmmaking", "Experimental Media"],
    youtubeId: "0Mi8d_qdR8M",
    videoLabel: "watch",
    date: "2026 Apr",
  },
  {
    slug: "now-ever",
    name: "Now & Ever Ephemeral",
    description:
      "An interactive portfolio project about memory, ephemerality, and the quiet emotional weight of passing moments.",
    tags: ["Experience Prototyping", "Digital Storytelling"],
    youtubeId: "Bl7FRA-TEWc",
    websiteUrl: "https://www.now-ever.live/",
    date: "2025 Aug",
  },
  {
    slug: "still-here",
    name: "Still Here",
    description:
      "An iOS co-regulation companion. A virtual cat that responds to your calm with quiet, wordless presence.",
    tags: ["SwiftUI", "CoreMotion", "Vision", "AVFoundation", "Sensor-driven"],
    youtubeId: "UTZKNjupYVU",
    date: "2026 Feb",
  },
  {
    slug: "modern-clippy",
    name: "Modern Clippy",
    description:
      "A proactive VS Code assistant for the prompt era — without shortcutting your thinking.",
    tags: [
      "Context-Aware",
      "Interactive Learning",
      "VS Code Extension",
      "AI Assistant",
    ],
    youtubeId: "SFzP3Awbbfo",
    date: "2025 Jan - 2025 Apr",
  },
  {
    slug: "ephemeral-archive",
    name: "Ephemeral Archive",
    description:
      "Finalist at the MIT AI Filmmaking Hackathon, Ephemeral Archive explores impermanence through movement, challenging the productivity-driven rhythms of modern life.",
    tags: ["AI Filmmaking", "Experimental Media"],
    youtubeId: "Lcq8qS0EGMk",
    videoLabel: "watch",
    imageSrc: "/images/finalist.jpeg",
    date: "2025 Mar",
  },
  {
    slug: "greedy-cat",
    name: "Greedy Cat",
    description:
      "A cat-themed twist on Snake Game, built in Python and inspired by the very real food rivalry between my cats, Ginkgo and Moonpie.",
    tags: ["Pygame", "Game Development", "Interactive"],
    githubUrl: "https://github.com/April1029/Greedy-Cat.git",
    imageSrc: "/images/GreedyCat.jpg",
    slidesUrl:
      "https://docs.google.com/presentation/d/1R9w8FmeFv66-1T1JqsdbXutmoHQ3fXtMAj5gAV5afjk/edit?usp=sharing",
    date: "2023 Sep - 2023 Dec",
  },
  {
    slug: "to-be-continued",
    name: "to be continued...",
    description: "",
    tags: [],
    placeholder: true,
  },
];
