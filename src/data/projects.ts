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
};

export const projects: Project[] = [
  {
    slug: "now-ever",
    name: "Now & Ever Ephemeral",
    description:
      "An interactive portfolio project about memory, ephemerality, and the quiet emotional weight of passing moments.",
    tags: ["Experience Prototyping", "Digital Storytelling"],
    youtubeId: "Bl7FRA-TEWc",
    websiteUrl: "https://now-and-ever.onrender.com/",
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
    slug: "to-be-continued",
    name: "to be continued...",
    description: "",
    tags: [],
    placeholder: true,
  },
];
