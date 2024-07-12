import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="pb-4 md:pb-20 pt-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-8 md:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h3 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            web dev quiz platform
          </h3>
          <h2 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
            Learn web development with <span className="text-purple">Quizzes</span>
          </h2>
          <TextGenerateEffect
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
            words="javaScript output based questions quizz competition will start on
            saturday at 9:30pm."
          ></TextGenerateEffect>
          <Link href="#about">
            <MagicButton
              title="Register Yourself"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
