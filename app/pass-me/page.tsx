"use client";
import Image from "next/image";
import { useState } from "react";

export default function PassMe() {
  const [game, setGame] = useState(false);
  return (
    <div className="flex min-h-screen snap-start items-center justify-center p-4 sm:p-8 h-full">
      <main className="flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-between rounded-[18px] border border-zinc-200 bg-[#fdfdfc] px-4 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:min-h-[90vh] sm:px-8 sm:py-16 sm:px-16">
        <h1 className="item-center text-center mx-auto text-4xl">
          I SAID PASS ME!
        </h1>
        {game && <p id="game">Unfortunately, I'm not a game developer 🥺</p>}
        <div className="flex item-center gap-7 w-full">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
              style={{ transform: "rotate(-90deg)" }}
            />
            Go Back
          </a>
          <button
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            onClick={() => setGame(!game)}
            rel="noopener noreferrer"
            type="button"
          >
            Play Game{" "}
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
              style={{ transform: "rotate(90deg)" }}
            />
          </button>
        </div>
      </main>
    </div>
  );
}
