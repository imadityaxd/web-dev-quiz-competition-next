"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Button from "@/components/Button";

export default function page() {
  return (
    <>
      <div
        className={`${cn(
          "kanit"
        )} bg-black-100 pt-44 flex justify-center items-center`}
      >
        <div className="rounded-[22px] w-[20rem] sm:w-[28rem] md:w-[34rem] lg:w-[46rem] p-4 sm:p-10 bg-gray-800 flex flex-col justify-center items-center border border-purple">
          <Image
            src={`/trophy.png`}
            alt="jordans"
            height={150}
            width={150}
            priority
            className="object-contain h-auto w-auto"
          />
          <h1 className=" text-purple text-3xl md:text-5xl border-b border-b-purple pt-4 mb-4">
            Rules
          </h1>
          <div>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                1.
              </span>
              Complete the quiz within the time limit. Else it will be submitted
              automatically.
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                2.
              </span>
              Each correct answer earns points. No penalty for wrong answers.
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                3.
              </span>
              Cheating or dishonesty is not recommended.
            </p>
            <p className="font-normal text-base text-white-200 mb-4">
              <span className="inline text-2xl text-purple pr-2 font-bold">
                4.
              </span>
              Provide feedback or raise issues via designated contact method
              (email or Instagram DM).
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap pb-10">
        <div className="bg-black-100 flex justify-center items-center pt-10 p-4 text-center">
          <Link href="/register" className="w-full">
            <Button text="Play Quiz" />
          </Link>
        </div>
      </div>
    </>
  );
}
