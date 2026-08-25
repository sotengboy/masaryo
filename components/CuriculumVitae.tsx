import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    company: "PT Intikom Berlian Mustika",
    period: "2023-Now",
    role: "Senior Software Developer at BCA Digital",
  },
  {
    company: "PT Global Mitra Copierindo",
    period: "2017-2022",
    role: "IT Head",
  },
  {
    company: "PT Global Mitra Copierindo",
    period: "2012-2017",
    role: "Marketing Online & Software Engineer",
  },
  {
    company: "PT Ganesha Adidaya/Wisuda",
    period: "2010-2012",
    role: "Engineer Copier and Printer Machine",
  },
];

const expertise = [
  "PHP",
  "HTML",
  "Javascript",
  "C#",
  "ReactJs/NextJs",
  "React Native",
  "NodeJs",
  "MongoDB",
  "MySQL",
  "PostgeSQL",
  "SQL Server",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h2 className="text-xs font-bold tracking-[0.25em] text-zinc-900 dark:text-zinc-100">
        {children}
      </h2>
      <div className="mt-3 h-[2px] w-10 bg-zinc-700 dark:bg-zinc-400" />
    </div>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen snap-start items-center justify-center p-3 sm:p-8">
      <div className="flex min-h-[75vh] w-full max-w-3xl flex-col items-center justify-between overflow-hidden rounded-[20px] border border-zinc-200 bg-[#f9f9f7] px-3 py-5 shadow-[0_16px_38px_rgba(15,23,42,0.08)] ring-1 ring-black/5 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.38)] sm:min-h-[90vh] sm:px-8 sm:py-10 md:px-12 md:py-16">
        {children}
      </div>
    </section>
  );
}

export default function Cv() {
  return (
    <>
      {/* CV PAGE 1 */}
      <PageShell>
        <header className="flex flex-col items-center gap-4 bg-[#175e92] px-4 py-8 text-white sm:flex-row sm:gap-8 sm:px-14 sm:py-14 w-full">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white/20 sm:h-32 sm:w-32">
            <Image
              src="/aryo.png"
              alt="Agus Sunaryo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="ml-0 sm:ml-10">
            <h1 className="text-2xl font-bold tracking-[0.08em] sm:text-5xl">
              AGUS SUNARYO
            </h1>

            <p className="mt-3 text-[9px] font-semibold tracking-[0.4em] text-zinc-300 sm:text-xs text-center md:text-left">
              SOFTWARE ENGINEER
            </p>
          </div>
        </header>

        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
          <div className="bg-zinc-100 px-4 py-6 dark:bg-zinc-900 sm:px-12 sm:py-12">
            <SectionTitle>ABOUT ME</SectionTitle>

            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              I am an Information Technology professional with experience since
              2015. I have strong expertise in web and mobile application
              development using Full Stack Developer building web and mobile
              applications with PHP, JavaScript, TypeScript, ReactJS, and React
              Native. Delivers across front-end, back-end, and API layers while
              extending skills into C# & Java development. Fits teams that need
              one developer to move from user interface work through server-side
              logic and database integration.
            </p>

            <div className="mt-12">
              <SectionTitle>CONTACT</SectionTitle>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                    Phone
                  </p>
                  <p className="mt-1 font-medium text-zinc-700 dark:text-zinc-200">
                    <Link href={"https://wa.me/6281222294324"} target="_blank">
                      +62812-2229-4324
                    </Link>
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                    Email
                  </p>
                  <p className="mt-1 break-all font-medium text-zinc-700 dark:text-zinc-200">
                    <Link href="mailto:masaryo1989@gmail.com">
                      masaryo1989@gmail.com
                    </Link>
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                    Address
                  </p>
                  <p className="mt-1 font-medium leading-6 text-zinc-700 dark:text-zinc-200">
                    Jatinegara, Jakarta Timur,
                    <br />
                    DKI Jakarta - Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-6 sm:px-12 sm:py-12">
            <SectionTitle>EXPERTISE</SectionTitle>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="border-b border-zinc-100 pb-2 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-base text-slate-700 dark:text-zinc-200">
                    Indonesia
                  </span>
                  <span className="text-sm text-slate-500 dark:text-zinc-400">
                    100%
                  </span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-[slate-300]">
                  <div
                    className="h-2.5 rounded-full bg-[#175e92]"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-base text-slate-700 dark:text-zinc-200">
                    English
                  </span>
                  <span className="text-sm text-slate-500 dark:text-zinc-400">
                    75%
                  </span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-slate-300">
                  <div
                    className="h-2.5 rounded-full bg-[#175e92]"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 px-7 py-4 text-right text-[9px] tracking-[0.25em] text-zinc-400 sm:px-12">
          CURRICULUM VITAE · 01
        </div>
      </PageShell>

      {/* CV PAGE 2 */}
      <PageShell>
        <div className="flex-1 px-2 py-6 ">
          <SectionTitle>WORK EXPERIENCE</SectionTitle>

          <div className="relative ml-2 border-l border-zinc-200 pl-7 dark:border-zinc-700 sm:pl-10">
            {experiences.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className={index === experiences.length - 1 ? "" : "pb-9"}
              >
                <span className="absolute -left-[5px] mt-1 h-2 w-2 rounded-full bg-zinc-700 dark:bg-zinc-400" />

                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 sm:text-base">
                    {item.company}
                  </h3>
                  <span className="text-[10px] font-medium tracking-wider text-zinc-400 dark:text-zinc-400">
                    {item.period}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-300">
                  {item.role}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div>
              <SectionTitle>EDUCATION</SectionTitle>

              <div className="space-y-7">
                <article>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      Bina Sarana Informatika
                    </h3>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                      2015
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-300">
                    Informatics Management - Diploma 3
                  </p>
                </article>

                <article>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      Universitas Nusa Mandiri
                    </h3>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                      2023
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-300">
                    Information Systems - Bachelor Degree
                  </p>
                </article>
              </div>
            </div>

            <div>
              <SectionTitle>CERTIFICATE</SectionTitle>

              <div className="space-y-7">
                <article>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      Hacktiv8 Course
                    </h3>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                      2019
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-300">
                    ReactJS, React Native, NodeJS &amp; MongoDB Course
                  </p>
                </article>

                <article>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      BNSP
                    </h3>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                      2023
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-300">
                    Program Analyst
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 px-7 py-4 text-right text-[9px] tracking-[0.25em] text-zinc-400 dark:border-zinc-700 dark:text-zinc-500 sm:px-14">
          CURRICULUM VITAE · 02
        </div>
      </PageShell>
    </>
  );
}
