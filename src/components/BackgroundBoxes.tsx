"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-black-100 flex flex-col items-center justify-center rounded-lg font-semibold">
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-purple relative z-20")}>
        About the Quiz Competition
      </h1>
      <p className="text-center mt-2 text-white-200 relative z-20 font-medium">
        Hi, i&apos;m Ravish from Uttarakhand, India.
      </p>
    </div>
  );
}
