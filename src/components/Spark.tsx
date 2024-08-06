"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/utils/cn";

export function SparklesPreview() {
  return (
    <div
      className={`${cn(
        "kanit"
      )} h-auto relative w-full bg-black-100 flex flex-col overflow-hidden rounded-md`}
    >
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white-100 relative z-20 pb-5">
        About us
      </h1>
      <div className="flex justify-center items-center mt-6">
        <div className="w-full relative max-w-5xl md:px-0 px-4">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-800 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h1 className="font-bold text-xl text-purple mb-4 relative z-50">
              Hi i&apos;m Ravish from India, Uttarakhand.
            </h1>

            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" />we&apos;ve
              build this website as a platform for JavaScript enthusiasts from
              all around the world to come together compete with each other.
            </p>
            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" />{" "}
              Want to see how you rank? After the competition, you’ll be able to
              check your position on the leaderboard and see how you stack up
              against other participants.
            </p>
            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" />{" "}
              It&apos;s totally free and Open to all participants worldwide.
              Anyone can take part in it.
            </p>
            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" />Top performers will receive
              a special shoutout on our{" "}
              <a
                href="https://www.instagram.com/web________developer"
                target="_blank"
                rel="noopener noreferrer" className="text-pink-500 font-bold"
              >
                Instagram
              </a>{" "}
              handle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
