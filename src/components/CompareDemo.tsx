"use client";
import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div>
      <Compare
        firstImage="/compare/first.jpg"
        secondImage="/compare/second.webp"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
