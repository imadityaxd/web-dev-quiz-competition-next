import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="pt-32">
      <div></div>
      <div className="h-[50%] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-8 md:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
            Learn web development with{" "}
            <span className="text-purple">
              Quiz
            </span>
          </h2>
          <h3 className="uppercase tracking-widest text-xs text-center text-gray-300 pt-6 font-mono">
            Take part in javaScript output based Quiz and compete with other
            developers and see your rank on leaderboard.
          </h3>
          <Link href="/about-competition" className="pt-10">
            <Button text="Know More" />
          </Link>
        </div>
      </div>
    </div>
  );
}
