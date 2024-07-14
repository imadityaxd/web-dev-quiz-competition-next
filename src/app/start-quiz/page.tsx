"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { FaCheckCircle } from "react-icons/fa";

export default function page() {
  return (
    <div
      className={`${cn(
        "kanit"
      )} bg-black-100 pt-36 flex justify-center items-center`}
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
            <FaCheckCircle className="inline text-3xl text-purple pr-2" />
            Total number of questions will be 25
          </p>
          <p className="font-normal text-base text-white-200 mb-4">
            <FaCheckCircle className="inline text-3xl text-purple pr-2" />
            Every <span className="font-semibold">Saturday at 9:30 PM</span>, I
            organize a{" "}
            <span className="font-semibold">JavaScript Quiz Competition</span>{" "}
            where you can put your skills to the test and compete with others
            for the top spot on our{" "}
            <span className="font-semibold">leaderboard</span>.
          </p>
        </div>
      </BackgroundGradient>
    </div>
  );
}
