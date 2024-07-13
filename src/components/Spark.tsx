"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Meteors } from "./ui/meteors";
import { FaCheckCircle } from "react-icons/fa";

export function SparklesPreview() {
  return (
    <div className="h-auto relative w-full bg-black-100 flex flex-col overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#7e81e7"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white-100 relative z-20 pb-5">
        About us
      </h1>
      <div className="flex justify-center items-center mt-6">
        <div className="w-full relative max-w-5xl md:px-0 px-4">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h1 className="font-bold text-xl text-purple mb-4 relative z-50">
              Hi i&apos;m Ravish from India, Uttarakhand.
            </h1>

            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" />I
              created this website as a platform for JavaScript enthusiasts from
              all around the world to come together and challenge themselves
              with exciting quiz questions.
            </p>
            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" />
              Every <span className="font-semibold">Saturday at 9:30 PM</span>,
              I organize a{" "}
              <span className="font-semibold">JavaScript Quiz Competition</span>{" "}
              where you can put your skills to the test and compete with others
              for the top spot on our{" "}
              <span className="font-semibold">leaderboard</span>.
            </p>
            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" />{" "}
              Want to see how you rank? After the competition, you’ll be able to
              check your position on the leaderboard and see how you stack up
              against other participants.
            </p>
            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" /> And
              that’s not all! The top rankers will get a{" "}
              <span className="font-semibold">
                shoutout on our Instagram handle
              </span>
              , giving you the recognition you deserve for your hard work and
              talent.
            </p>
            <p className="font-normal text-base text-white-200 mb-4 relative z-50">
              <FaCheckCircle className="inline text-3xl text-purple pr-2" />{" "}
              Join us every week for a new challenge and let’s make learning
              JavaScript fun and competitive!
            </p>
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
