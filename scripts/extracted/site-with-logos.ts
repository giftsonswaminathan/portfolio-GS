export const BOOKING_FORM_URL = "https://forms.gle/BDNvbjtEM6YWGHtM9";

export const CONTACT_EMAIL = "giftsonswaminathan@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/webc.raftworks/",
  linkedin: "https://www.linkedin.com/in/giftson-swaminathan-b52627311/",
} as const;

export type ProjectCategory = "design" | "development";

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
      "Salon website with service showcase and booking flow to increase customer inquiries.",
    image: "/saloon.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    categories: ["design", "development"],
    link: "https://sunlightsaloon.vercel.app/",
  },
  {
    title: "Villa Makers",
    description:
      "Sample website for a construction company with clear service positioning and trust-building layout.",
    image: "/villa.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    categories: ["design", "development"],
    link: "https://villamaker.vercel.app/",
  },
  {
    title: "Chef in a Box",
    description:
      "Food platform UI focused on engagement and conversions with a clean, appetizing visual system.",
    image: "/chef.png",
    tags: ["React", "Node.js", "MongoDB"],
    categories: ["development"],
    link: "https://chef-in-a-bo.vercel.app/",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter leads",
    price: "₹2,999",
    description: "Start getting more calls and enquiries from Google.",
    features: [
      "Get more customer calls",
      "WhatsApp & call button",
      "Mobile-friendly website",
      "Basic Google visibility setup",
      "Fast delivery (2–3 days)",
    ],
    popular: false,
    cta: "Show me demo",
  },
  {
    name: "Growth business",
    price: "₹5,999",
    description: "Look professional and get consistent enquiries.",
    features: [
      "Everything in Starter",
      "Multi-page business website",
      "Better Google search visibility",
      "Lead capture system",
      "Stronger trust-building design",
    ],
    popular: true,
    cta: "Get more customers",
  },
  {
    name: "Domination",
    price: "₹14,999",
    description: "For businesses serious about getting more leads.",
    features: [
      "Everything in Growth",
      "High-converting pages",
      "Advanced SEO setup",
      "Monthly performance tracking",
      "Priority support",
    ],
    popular: false,
    cta: "Grow my business",
  },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "Why Web Craftworks?",
    answer:
      "I focus on high-performance, conversion-oriented websites. Every project blends modern design with solid engineering so your business stands out and scales.",
  },
  {
    question: "How long does it take?",
    answer:
      "A standard landing page typically takes 3–5 days. More complex multi-page sites or e-commerce builds can take 2–4 weeks depending on scope.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing starts at ₹2,999 for a focused starter site. Transparent tiers help you pick what fits your stage and budget.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Modern stacks such as React, Next.js, Tailwind CSS, and Motion on the frontend, with Node.js or Firebase when backend work is needed.",
  },
];

export const techLogos = [
  { name: "Vercel", icon: "▲" },
  { name: "Next.js", icon: "N" },
  { name: "Tailwind", icon: "≈" },
  { name: "React", icon: "⚛" },
  { name: "Motion", icon: "◎" },
  { name: "GitHub", icon: "G" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node", icon: "⬢" },
] as const;

export const services = [
  {
    title: "Product design",
    description:
      "Clear structure, refined typography, and conversion-minded layouts that feel bespoke—not template-driven.",
    icon: "layout" as const,
  },
  {
    title: "Build & ship",
    description:
      "Fast, accessible frontends with clean component architecture—easy for you to extend later.",
    icon: "code" as const,
  },
  {
    title: "Search visibility",
    description:
      "Technical SEO basics, semantic markup, and performance tuning so Google and users both see quality.",
    icon: "search" as const,
  },
  {
    title: "Performance",
    description:
      "Core vitals-minded delivery: optimized media, minimal JS, and smooth motion that respects reduced motion.",
    icon: "gauge" as const,
  },
] as const;
