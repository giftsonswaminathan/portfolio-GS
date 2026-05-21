export const BOOKING_FORM_URL = "https://forms.gle/BDNvbjtEM6YWGHtM9";

export const CONTACT_EMAIL = "giftsonswaminathan@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/webc.raftworks/",
  linkedin: "https://www.linkedin.com/in/giftson-swaminathan-b52627311/",
} as const;

export const PERSON = {
  name: "Giftson Swaminathan",
  role: "Full stack web developer",
  initials: "GS",
} as const;

export type ProjectCategory = "business" | "ecommerce" | "webapp";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: ProjectCategory[];
  link: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Sunlight Salon",
    description:
      "A professional business website focused on responsive design, performance optimization, modern branding, and user-friendly navigation.",
    image: "/saloon.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    categories: ["business"],
    link: "https://sunlightsaloon.vercel.app/",
  },
  {
    title: "Villa Makers",
    description:
      "A professional business website focused on responsive design, performance optimization, modern branding, and user-friendly navigation.",
    image: "/villa.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    categories: ["business"],
    link: "https://villamaker.vercel.app/",
  },
  {
    title: "Chef in a Box",
    description:
      "A modern ecommerce-style platform featuring responsive product presentation, streamlined user flows, and an optimized experience across devices.",
    image: "/chef.png",
    tags: ["React", "Node.js", "MongoDB"],
    categories: ["ecommerce"],
    link: "https://chef-in-a-bo.vercel.app/",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
  {
    title: "Currently exploring",
    items: ["TypeScript", "Next.js", "AI automation systems"],
  },
] as const;

export const whyWorkWithMe = [
  "Modern & professional design",
  "Responsive across all devices",
  "Performance-optimized development",
  "Clean & scalable code structure",
  "User-focused UI/UX",
  "Modern technology stack",
  "Continuous learning & improvement",
] as const;

export const services = [
  {
    title: "Business website development",
    description:
      "Professional websites for businesses, startups, agencies, and personal brands with modern UI and responsive design.",
    icon: "business" as const,
  },
  {
    title: "Ecommerce website development",
    description:
      "Modern ecommerce platforms with product management, shopping cart systems, payment integration, and optimized user experience.",
    icon: "ecommerce" as const,
  },
  {
    title: "Custom web application development",
    description:
      "Interactive dashboards, admin panels, management systems, and scalable custom web applications tailored to business requirements.",
    icon: "app" as const,
  },
  {
    title: "Frontend & backend development",
    description:
      "Modern frontend interfaces and backend systems built using scalable technologies and clean development practices.",
    icon: "stack" as const,
  },
  {
    title: "Website redesign & optimization",
    description:
      "Transforming outdated websites into fast, responsive, and modern digital experiences.",
    icon: "refresh" as const,
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];
