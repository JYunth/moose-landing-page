"use client";
import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div>
      <Compare
        firstImage="https://utfs.io/f/PlGaYgnK59GSWXz6HTEjFfsUaI3Gu8q192vO6zYkbQedmWox"
        secondImage="https://utfs.io/f/PlGaYgnK59GSZD5bPd8YCxO0EYRfyePl1sBZhkDvAaHc6LU3"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
