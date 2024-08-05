"use client";
import React from "react";
import { cn } from "@/utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-80 relative w-full overflow-hidden bg-black-100 flex flex-col items-center justify-center rounded-lg font-semibold pt-14">
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <h1 className={cn("kanit md:text-4xl text-2xl text-purple relative z-20")}>
        About the Quiz Competition
      </h1>
      <p className="text-center mt-2 text-white-200 relative z-20 font-medium">
        Let&apos; learn javaScript with Quizzes.
      </p>
    </div>
  );
}
