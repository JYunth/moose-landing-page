"use client";
import { HoverEffect } from "./ui/card-hover-effect";
 
export function Finalcard() {
  return (
    <div >
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