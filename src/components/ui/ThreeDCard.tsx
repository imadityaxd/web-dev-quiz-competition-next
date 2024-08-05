import Image from "next/image";
import React from "react";

export default function QuizCard() {
  return (
    <div>
      <div className="flex md:flex-row flex-col mt-10 justify-center items-center">
        <Image
          src="/quiz1.png"
          height="1000"
          width="1000"
          className="rounded-lg w-[22rem] h-[15rem] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          alt="thumbnail"
        />
        <Image
          src="/quiz2.png"
          height="1000"
          width="1000"
          className="rounded-lg w-[22rem] h-[15rem] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          alt="thumbnail"
        />
      </div>
    </div>
  );
}
