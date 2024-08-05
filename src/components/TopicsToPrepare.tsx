"use client";

import { cn } from "@/utils/cn";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className={`${cn(
      "kanit"
    )} max-w-5xl mx-auto px-8 my-8`}>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Arrays",
    description:
      "Understanding how to create, manipulate, and access elements in arrays.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  },
  {
    title: "Objects",
    description:
      "Working with objects, including creating, updating, and accessing properties.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
  },
  {
    title: "Functions",
    description:
      "Creating and invoking functions, including understanding parameters and return values.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
  },
  {
    title: "Hoisting",
    description:
      "Exploring how variable and function declarations are moved to the top of their containing scope.",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
  },
  {
    title: "Loops",
    description:
      "Using loops like for, while, and do-while to iterate over arrays or perform repeated actions.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
  },
  {
    title: "Conditionals",
    description:
      "Implementing conditional statements like if, else if, and else to control the flow of a program.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else",
  },
];
