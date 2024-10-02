"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";

export function Finalcard() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <p className="text-6xl font-inter font-semibold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-500 text-center mb-3">Boost your sales with</p>
        <Image
          src = "/moose-logo.svg"
          alt = "moose-logo"
          width = {250}
          height = {250}
        />
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Click through",
    description:
      "To increase CTR for a clothing brand, use eye-catching headlines and highlight offers like discounts or limited-time collections. Leverage high-quality visuals, social proof, and compelling call-to-action buttons to boost engagement..",
    link: "https://stripe.com",
  },
  {
    title: "Conversion rates ",
    description:
      "To boost conversion rates, optimize the checkout process for ease, offer clear value propositions, and use personalized recommendations.",
    link: "https://netflix.com",
  },
  {
    title: "Stand out ",
    description:
      "To stand out from the crowd, emphasize your unique brand identity through exclusive designs or innovative features. Showcase authentic storytelling and engage with your audience through personalized, memorable experiences.",
    link: "https://google.com",
  },

];