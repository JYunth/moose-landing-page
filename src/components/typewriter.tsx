"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from 'next/link';

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Make",
      className: "text-white dark:text-white",
    },
    {
      text: "awesome",
      className: "text-white dark:text-white",
    },
    {
      text: "mockups",
      className: "text-white dark:text-white",
    },
    {
      text: "with",
      className: "text-white dark:text-white",
    },
    {
      text: "MooseAI",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">

      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href="https://mooseai.streamlit.app" target="_blank">
          <button className="w-40 h-10 rounded-xl bg-black border border-white border-transparent text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
            Use now!
          </button>
        </Link>
      </div>
    </div>
  );
}
