import CuriculumVitae from "@/components/CuriculumVitae";
import Portfolio from "@/components/Portfolio";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-zinc-100 dark:bg-black">
      {/* PAGE 1 */}
      <section className="flex min-h-screen snap-start items-center justify-center p-4 sm:p-8">
        <main className="flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-between rounded-[18px] border border-zinc-200 bg-[#fdfdfc] px-4 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:min-h-[90vh] sm:px-8 sm:py-16 sm:px-16">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />

          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              To learn more about me, keep scrolling this page.tsx file.
            </h1>

            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for my portfolio? Head to the{" "}
              <a
                href="/#portfolio"
                className="font-medium text-zinc-950 underline dark:text-zinc-50"
              >
                Portfolio
              </a>{" "}
              section.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="/pass-me"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
                style={{ transform: "rotate(180deg)" }}
              />
              Pass me
            </a>
          </div>
        </main>
      </section>

      {/* PAGE 2 */}

      <CuriculumVitae />

      {/* PAGE 3 */}
      <section className="flex min-h-screen snap-start items-center justify-center p-4 sm:p-8">
        <main className="flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center rounded-lg bg-white p-3 shadow-sm dark:bg-zinc-950 sm:min-h-[90vh] sm:p-8 md:p-10 lg:p-12">
          <Portfolio />
        </main>
      </section>
      <ScrollToTop />
    </div>
  );
}
