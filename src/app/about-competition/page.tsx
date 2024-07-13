import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import { SparklesPreview } from "@/components/Spark";
import React from "react";

export default function About() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto pb-10 pt-4">
      <BackgroundBoxesDemo />
      <SparklesPreview />
    </div>
  );
}
