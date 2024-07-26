import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import { SparklesPreview } from "@/components/Spark";
import { CardHoverEffectDemo } from "@/components/TopicsToPrepare";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";
import React from "react";
import { FaTrophy } from "react-icons/fa";
import { MdDashboard } from 'react-icons/md';

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
          <MagicButton
            title="Go To Quiz Page"
            icon={<FaTrophy />}
            position="right"
          />
        </Link>
      </div>
      <Link href="/leaderboard" className="mt-6">
          <MagicButton
            title="Go To last updated leaderboard"
            icon={<MdDashboard/>}
            position="right"
          />
        </Link>
    </div>
  );
}
