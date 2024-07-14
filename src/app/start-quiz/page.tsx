"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { FaCheckCircle } from "react-icons/fa";
import TimeUntilCompetition from "@/components/TimeLeft";

export default function page() {
  return (
    <>
      <div
        className={`${cn(
          "kanit"
        )} bg-black-100 pt-44 flex justify-center items-center`}
      >
        <BackgroundGradient className="rounded-[22px] w-[20rem] sm:w-[28rem] md:w-[34rem] lg:w-[46rem] p-4 sm:p-10 bg-black-200 flex flex-col justify-center items-center">
          <Image
            src={`/trophy.png`}
            alt="jordans"
            height="150"
            width="150"
            className="object-contain"
          />
          <h1 className=" text-purple text-3xl md:text-5xl border-b border-b-purple pt-4 mb-4">
            Rules
          </h1>
          <div>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                1.
              </span>
              Join the quiz on time. Late entries will not be accepted.
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                2.
              </span>
              Complete the quiz within the 30-minute time limit.
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                3.
              </span>
              Leaderboard updated in real-time or shortly after the quiz ends.
              And you will be able to see your rank.
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                4.
              </span>
              Each correct answer earns points. No penalty for wrong answers.
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                5.
              </span>
              Cheating or dishonesty results in disqualification.
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                6.
              </span>
              Ensure a stable internet connection and Use a compatible device
              (PC, tablet, or smartphone).
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                7.
              </span>
              Provide feedback or raise issues via designated contact method
              (email or Instagram DM).
            </p>
          </div>
        </BackgroundGradient>
      </div>
      <div>
        <TimeUntilCompetition />
      </div>
    </>
  );
}
