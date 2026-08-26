export type PortfolioData = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
};

export const portfolios: PortfolioData[] = [
  {
    title: "Service Hub",
    category: "Maintenance Management System",
    description:
      "A maintenance platform that connects customers, engineers, and management in a single system.",
    image: "/portfolio/servicehub.png",
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    role: "System Design - Full Stack Development",
  },
  {
    title: "WhatsApp AI Chatbot",
    category: "AI & Automation",
    description:
      "Automated WhatsApp customer support powered by AI, conversation management, and human handover.",
    image: "/portfolio/whatshub.png",
    technologies: [
      "Next.js",
      "Firebase",
      "WhatsApp Business API",
      "AI",
      "MongoDB",
    ],
    role: "System Design - Full Stack Development - AI Integration",
  },
  {
    title: "Karya Tiga Solusindo",
    category: "Web Commerce",
    description:
      "A custom e-commerce platform with product management, checkout flow, order management, and system integration.",
    image: "/portfolio/ecommerce.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    role: "System Architecture - Full Stack Development",
  },
  {
    title: "Astro Property",
    category: "Property Listing Platform",
    description:
      "A custom property listing web to list and sell property by registered agent.",
    image: "/portfolio/astroproperty.png",
    technologies: ["Next.js", "TypeScript", "Laravel", "REST API"],
    role: "System Architecture - Full Stack Development",
  },
];
