// TimeUntilCompetition.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import {
  formatDateInTimeZone,
  getCompetitionTimeUTC,
} from "@/helpers/setCompetition/competitionHelper";

import Button from "./Button";

const TimeUntilCompetition: React.FC = () => {

  const router = useRouter();

  return (
    <div className="bg-black-100 flex justify-center items-center pt-10 p-4 text-center">
      <Link href="/register" className="w-full">
        <Button text="Play Quiz" />
      </Link>
    </div>
  );
};

export default TimeUntilCompetition;
