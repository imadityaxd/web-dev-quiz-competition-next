"use client";
import { FaTrophy } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Know",
    },
    {
      text: "more",
    },
    {
      text: "about",
    },
    {
      text: "javsScript",
    },
    {
      text: "Quiz",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "competition.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <TypewriterEffectSmooth words={words} />
      <Link href="/about-competition">
        <MagicButton
          title="Click here to know more"
          icon={<FaTrophy />}
          position="right"
        />
      </Link>
    </div>
  );
}
