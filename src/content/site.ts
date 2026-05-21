export const BOOKING_FORM_URL = "https://forms.gle/BDNvbjtEM6YWGHtM9";

export const CONTACT_EMAIL = "giftsonswaminathan@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** India format without + or spaces */
export const WHATSAPP_NUMBER = "917708863300";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Giftson, I found your portfolio and would like to discuss a project.",
)}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/webc.raftworks/",
  linkedin: "https://www.linkedin.com/in/giftson-swaminathan-b52627311/",
  whatsapp: WHATSAPP_URL,
} as const;

export const PERSON = {
  name: "Giftson Swaminathan",
  role: "Full stack web developer",
  initials: "GS",
} as const;

export type ProjectCategory = "design" | "development" | "seo";

export type Project = {
  title: string;
  description: string;
  image: string;
  /** CDN backup if local preview fails to load */
  imageFallback?: string;
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
    tags: ["Next.js", "SEO Optimized", "Tailwind CSS"],
    categories: ["seo", "design"],
    link: "https://sunlightsaloon.vercel.app/",
  },
  {
    title: "Villa Makers",
    description:
      "A high-end architectural portfolio built with custom animations, grid layouts, and pixel-perfect branding details.",
    image: "/villa.png?v=2",
    imageFallback:
      "https://iad.microlink.io/8kZG-4jk64bSTxftiOQgx2etMAi_1m9i1g6HxA7KM_WQek7XNJz4nr23OG1A1l_JSTOUYQaiaUUFsl3r37X5Hg.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    categories: ["design"],
    link: "https://villamaker.vercel.app/",
  },
  {
    title: "Chef in a Box",
    description:
      "A full-featured digital ecommerce and booking hub with responsive UI and optimized state management systems.",
    image: "/chef.png?v=2",
    imageFallback:
      "https://iad.microlink.io/W_DO17hA6_Dr2CZQga0z3P8H2KXX9270nVXtX0HD9rJbVA4jUkL_xPppDLBk76jooX5-VPbTitbETr-k-vadUQ.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    categories: ["development", "design"],
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
