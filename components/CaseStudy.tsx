"use client";

import Image from "next/image";
import { caseStudies } from "@/database/casestudy";

export default function CaseStudy() {
  return (
    <section
      className="flex min-h-screen snap-start items-center justify-center p-4 sm:p-8"
      id="casestudy"
    >
      <main className="flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center rounded-lg bg-white p-3 shadow-sm dark:bg-zinc-950 sm:min-h-[90vh] sm:p-8 md:p-10 lg:p-12">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
          {/* Header */}
          <div className="mb-6 flex flex-col justify-between gap-3 md:mb-10 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 md:text-5xl">
                Case Study
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-zinc-300">
                A closer look at the problems I solved and the solutions I
                built.
              </p>
            </div>

            <span className="text-sm text-slate-400 dark:text-zinc-400">
              2025 - 2026
            </span>
          </div>

          {/* Portfolio List */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-5">
            {caseStudies.map((project) => (
              <article
                key={project.title}
                className="group grid gap-4 p-3 first:pt-0 sm:gap-6 sm:py-8 rounded-lg border border-dashed border-slate-200 dark:border-zinc-800"
              >
                {/* Text */}
                <div className="flex flex-col w-full">
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
                  <a
                    className="flex mt-5 h-12 gap-2 text-[#175e92] transition-colors hover:text-blue-500"
                    href={`/case/${project.slug}`}
                    rel="noopener noreferrer"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto flex flex-col gap-2 border-t border-slate-200 pt-6 text-left sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
            <p className="text-xs text-slate-400 dark:text-zinc-400">
              Designing systems. Building products. Solving problems.
            </p>

            <p className="text-xs font-semibold text-slate-700 dark:text-zinc-200">
              Software Engineer
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
