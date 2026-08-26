import { GitGraphIcon } from "lucide-react";
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

function PageShell({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      className="flex min-h-screen snap-start items-center justify-center p-3 sm:p-8"
      id={id}
    >
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
      <PageShell id="cv1">
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
                <div className="flex gap-5">
                  <Link href="https://github.com/sotengboy" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="30"
                      viewBox="0 0 98 96"
                      fill="none"
                      className="dark:text-white"
                    >
                      <g clip-path="url(#clip0_730_27126)">
                        <path
                          d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_730_27126">
                          <rect width="98" height="96" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/agus-sunaryo"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      height="32"
                      width="32"
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 382 382"
                      xmlSpace="preserve"
                      className="dark:text-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link href="https://instagram.com/masaryo.id" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="32"
                      height="32"
                      x="0"
                      y="0"
                      viewBox="0 0 511 511.9"
                      xmlSpace="preserve"
                      className="dark:text-white"
                    >
                      <g>
                        <path
                          d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.93 130.93 0 0 0 74.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5m-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301m0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5m0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3M423.852 119.3c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699m0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                  <Link href="https://wa.me/+6281222294324" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="32"
                      height="32"
                      x="0"
                      y="0"
                      viewBox="0 0 682 682.667"
                      xmlSpace="preserve"
                      className="dark:text-white"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          d="M544.387 93.008C484.512 33.063 404.883.035 320.05 0 145.246 0 2.98 142.262 2.91 317.113c-.024 55.895 14.577 110.457 42.331 158.551L.25 640l168.121-44.102c46.324 25.27 98.477 38.586 151.55 38.602h.134c174.785 0 317.066-142.273 317.133-317.133.035-84.742-32.922-164.418-92.801-224.36M320.05 580.94h-.11c-47.296-.02-93.683-12.73-134.16-36.742l-9.62-5.715-99.766 26.172 26.628-97.27-6.27-9.972c-26.386-41.969-40.32-90.476-40.296-140.281.055-145.332 118.305-263.57 263.7-263.57 70.406.023 136.59 27.476 186.355 77.3s77.156 116.051 77.133 186.485C583.582 462.69 465.34 580.94 320.05 580.94m144.586-197.418c-7.922-3.968-46.883-23.132-54.149-25.78-7.258-2.645-12.547-3.962-17.824 3.968-5.285 7.93-20.469 25.781-25.094 31.066-4.625 5.29-9.242 5.953-17.168 1.985-7.925-3.965-33.457-12.336-63.726-39.332-23.555-21.012-39.457-46.961-44.082-54.89-4.617-7.938-.04-11.813 3.476-16.173 8.578-10.652 17.168-21.82 19.809-27.105 2.644-5.29 1.32-9.918-.664-13.883-1.977-3.965-17.824-42.969-24.426-58.84-6.437-15.445-12.965-13.36-17.832-13.601-4.617-.231-9.902-.278-15.187-.278-5.282 0-13.868 1.98-21.133 9.918-7.262 7.934-27.73 27.102-27.73 66.106s28.394 76.683 32.355 81.972c3.96 5.29 55.879 85.328 135.367 119.649 18.906 8.172 33.664 13.043 45.176 16.695 18.984 6.031 36.254 5.18 49.91 3.14 15.226-2.277 46.879-19.171 53.488-37.68 6.602-18.51 6.602-34.374 4.617-37.683-1.976-3.304-7.261-5.285-15.183-9.254m0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                  <Link href="mailto:masaryo1989@gmail.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="32"
                      height="32"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                      className="dark:text-white"
                    >
                      <g>
                        <path
                          d="M467 76H45C20.137 76 0 96.262 0 121v270c0 24.885 20.285 45 45 45h422c24.655 0 45-20.03 45-45V121c0-24.694-20.057-45-45-45m-6.302 30L287.82 277.967c-8.5 8.5-19.8 13.18-31.82 13.18s-23.32-4.681-31.848-13.208L51.302 106zM30 384.894V127.125L159.638 256.08zM51.321 406l129.587-128.763 22.059 21.943c14.166 14.166 33 21.967 53.033 21.967s38.867-7.801 53.005-21.939l22.087-21.971L460.679 406zM482 384.894 352.362 256.08 482 127.125z"
                          fill="currentColor"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </Link>
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
      <PageShell id="cv2">
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
