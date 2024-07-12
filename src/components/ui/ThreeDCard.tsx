"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-12 mx-4 mb-10">
      <CardContainer className="inter-var text-center">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-white-100 w-auto h-auto rounded-xl p-2 border text-center">
          <CardItem
            translateZ="50"
            className="text-xl text-center font-bold dark:text-purple"
          >
            Guess the Output ?
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/quiz1.png"
              height="1000"
              width="1000"
              className="h-64 w-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-white-100 w-auto h-auto rounded-xl p-2 border text-center">
          <CardItem
            translateZ="50"
            className="text-xl text-center font-bold dark:text-purple"
          >
            Guess the Output ?
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/quiz2.png"
              height="1000"
              width="1000"
              className="h-64 w-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
