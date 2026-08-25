"use client";
import Image from "next/image";
import { useState } from "react";

export default function PassMe() {
  const [game, setGame] = useState(false);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-5 bg-white dark:bg-black sm:items-start">
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
