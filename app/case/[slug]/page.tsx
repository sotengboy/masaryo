import { notFound } from "next/navigation";
import { caseStudies } from "@/database/casestudy";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function CaseDetail({ params }: Props) {
  const { slug } = await params;

  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-zinc-100 dark:bg-black">
      <section className="flex min-h-screen snap-start items-center justify-center p-4 sm:p-8">
        <main className="flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center rounded-lg bg-white p-3 shadow-sm dark:bg-zinc-950 sm:min-h-[90vh] sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-6xl">
            {/* Back */}
            <div className="mb-10">
              <a
                href="/#casestudy"
                className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                ← Back to Case Studies
              </a>
            </div>

            {/* Hero */}
            <header className="mb-16 max-w-4xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-400">
                Case Study
              </p>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl dark:text-white">
                {caseStudy.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
                {caseStudy.description}
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 dark:border-zinc-800 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </header>

            {/* Overview */}
            <section className="mb-10 border-y border-dashed border-slate-200 py-8 dark:border-zinc-800">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-white">
                    Role
                  </p>
                  <p className="mt-2 font-medium dark:text-zinc-400">
                    {" "}
                    {caseStudy.role}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-white">
                    Duration
                  </p>
                  <p className="mt-2 font-medium dark:text-zinc-400">
                    {caseStudy.duration}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-white">
                    Focus
                  </p>
                  <p className="mt-2 font-medium dark:text-zinc-400">
                    {caseStudy.focus}
                  </p>
                </div>
              </div>
            </section>

            {/* Content */}
            <div className="mx-auto max-w-4xl space-y-10">
              {/* 01 Problem */}
              <article>
                <p className="mb-3 text-sm font-semibold text-slate-400">01</p>

                <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                  The Problem
                </h2>

                <div
                  className="mt-5 leading-8 text-slate-600 dark:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: caseStudy.problem }}
                />
              </article>

              {/* 02 Goal */}
              <article>
                <p className="mb-3 text-sm font-semibold text-slate-400">02</p>

                <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                  The Goal
                </h2>

                <div
                  className="mt-5 leading-8 text-slate-600 dark:text-zinc-400 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2"
                  dangerouslySetInnerHTML={{ __html: caseStudy.goal }}
                />
              </article>

              {/* 03 Approach */}
              <article>
                <p className="mb-3 text-sm font-semibold text-slate-400">03</p>

                <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                  My Approach
                </h2>

                <div
                  className="mt-5 leading-8 text-slate-600 dark:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: caseStudy.approach }}
                />
              </article>

              {/* 04 Challenges */}
              <article>
                <p className="mb-3 text-sm font-semibold text-slate-400">04</p>

                <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                  Technical Challenges
                </h2>

                <div
                  dangerouslySetInnerHTML={{ __html: caseStudy.challenges }}
                />
              </article>

              {/* 05 Solution */}
              <article>
                <p className="mb-3 text-sm font-semibold text-slate-400">05</p>

                <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                  The Solution
                </h2>
                <div dangerouslySetInnerHTML={{ __html: caseStudy.solution }} />
              </article>

              {/* 06 Result */}
              <article>
                <p className="mb-3 text-sm font-semibold text-slate-400">06</p>

                <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                  Result
                </h2>
                <div dangerouslySetInnerHTML={{ __html: caseStudy.result }} />
              </article>

              {/* 07 Learning */}
              <article>
                <p className="mb-3 text-sm font-semibold text-slate-400">07</p>

                <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                  What I Learned
                </h2>
                <div dangerouslySetInnerHTML={{ __html: caseStudy.learned }} />
              </article>

              {/* Tech Stack */}
              <article className="border-t border-dashed border-slate-200 pt-10 dark:border-zinc-800">
                <h2 className="text-xl font-bold dark:text-white">
                  Technology Stack
                </h2>

                <div className="mt-5 flex flex-wrap gap-2 dark:text-zinc-400">
                  {caseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-3 py-2 text-sm dark:bg-zinc-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </div>

            {/* Footer CTA */}
            <div className="mt-24 border-t border-dashed border-slate-200 pt-10 dark:border-zinc-400">
              <a
                href="/#casestudy"
                className="text-sm font-medium transition hover:opacity-60"
              >
                ← Back to Case Studies
              </a>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
