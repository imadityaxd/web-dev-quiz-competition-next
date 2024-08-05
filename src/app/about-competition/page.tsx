import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import Button from "@/components/Button";
import { SparklesPreview } from "@/components/Spark";
import { CardHoverEffectDemo } from "@/components/TopicsToPrepare";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Learn JavaScript With Quiz | About Javascript Quiz Competition",
  description:
    "Learn about the JavaScript output-based question competition. Compete in our weekly and daily quizzes, improve your skills, and see how you rank among other developers on the leaderboard.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "About JavaScript Quiz Competition - Test Your Skills",
    description:
      "Learn about the JavaScript output-based question competition. Compete in our weekly or daily quizzes, improve your skills, and see how you rank among other developers on the leaderboard.",
    url: "https://www.webdevquiz.online/about-competition",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.webdevquiz.online/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "About JavaScript Quiz Competition - Test Your Skills",
      },
    ],
  },
};

export default function About() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto pb-10 pt-4">
      <BackgroundBoxesDemo />
      <SparklesPreview />
      <div className="text-center mt-14">
        <h2 className="px-4 text-xl text-center text-white-100 font-semibold md:text-3xl">
          Topics you need to prepare for the quiz competition.
        </h2>
        <CardHoverEffectDemo />
        <Link href="/start-quiz">
          <Button text="Go to Quiz Page" />
        </Link>
      </div>
    </div>
  );
}
