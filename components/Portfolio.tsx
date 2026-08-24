"use client";

import Image from "next/image";

const projects = [
  {
    title: "Service Hub",
    category: "Maintenance Management System",
    description:
      "A maintenance platform that connects customers, engineers, and management in a single system.",
    image: "/portfolio/servicehub.png",
    technologies: ["Next.js", "React Native", "Node.js", "MongoDB"],
    role: "System Design • Full Stack Development",
  },
  {
    title: "WhatsApp AI Chatbot",
    category: "AI & Automation",
    description:
      "Automated WhatsApp customer support powered by AI, conversation management, and human handover.",
    image: "/portfolio/whatshub.png",
    technologies: ["Next.js", "Node.js", "WhatsApp API", "AI"],
    role: "System Design • Full Stack Development • AI Integration",
  },
  {
    title: "Karya Tiga Solusindo",
    category: "Web Commerce",
    description:
      "A custom e-commerce platform with product management, checkout flow, order management, and system integration.",
    image: "/portfolio/ecommerce.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    role: "System Architecture • Full Stack Development",
  },
  {
    title: "Astro Property",
    category: "Property Listing Platform",
    description:
      "A custom property listing web to list and sell property by registered agent.",
    image: "/portfolio/astroproperty.png",
    technologies: ["Next.js", "TypeScript", "Laravel", "REST API"],
    role: "System Architecture • Full Stack Development",
  },
];

export default function Portfolio() {
  return (
    <section
      className="min-h-screen bg-white px-3 py-8 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 "
      id="portfolio"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-3 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Selected Works
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 md:text-5xl">
              Portfolio
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-zinc-300">
              Selected projects designed and developed from architecture to
              deployment.
            </p>
          </div>

          <span className="text-sm text-slate-400 dark:text-zinc-400">
            2025 — 2026
          </span>
        </div>

        {/* Portfolio List */}
        <div className="divide-y divide-slate-200 dark:divide-zinc-800">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group grid gap-4 py-6 first:pt-0 sm:gap-6 sm:py-8 md:grid-cols-[42%_1fr] md:gap-10"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  {project.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-400">
                    Role
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-zinc-200">
                    {project.role}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-6 text-left sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
          <p className="text-xs text-slate-400 dark:text-zinc-400">
            Designing systems. Building products. Solving problems.
          </p>

          <p className="text-xs font-semibold text-slate-700 dark:text-zinc-200">
            Software Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
