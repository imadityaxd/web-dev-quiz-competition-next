// TimeUntilCompetition.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import {
  formatDateInTimeZone,
  getCompetitionTimeUTC,
} from "@/helpers/setCompetition/competitionHelper";
import { useAuth } from "@/context/AuthContext";

const TimeUntilCompetition: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [localCompetitionTime, setLocalCompetitionTime] = useState<string>("");
  const { timerEnded, setTimerEnded } = useAuth();
  // const [timerEnded, setTimerEnded] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      let nextCompetitionUTC = getCompetitionTimeUTC(0, 7, 0); // Competition set at everyday at 7 am to 11: 59 pm.

      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get the user's time zone dynamically
      // console.log("use Zone: ", timeZone);
      const dateFormat = "eeee, MMMM d, yyyy @ hh:mm:ss a";

      // Set the local competition time
      const localTime = formatDateInTimeZone(
        nextCompetitionUTC,
        timeZone,
        dateFormat
      );
      // console.log("cal time", localTime);
      // console.log(`Competition starts at: ${localTime}`);

      setLocalCompetitionTime(`Competition starts at: ${localTime}`);

      const diff = nextCompetitionUTC.getTime() - now.getTime();

      if (diff <= 0) {
        if (!timerEnded) {
          setTimeLeft("The competition has started!");
          setTimerEnded(true);
        }
        return;
      }

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timerInterval = setInterval(() => {
      if (!timerEnded) {
        updateTimer();
      }
    }, 1000);

    updateTimer();

    return () => clearInterval(timerInterval);
  }, [router, setTimerEnded, timerEnded]);

  return (
    <div className="bg-black-100 flex justify-center items-center pt-10 p-4 text-center">
      {timerEnded ? (
        <Link href="/register" className="w-full">
          <MagicButton title="Quick Registration" icon="" position="" />
        </Link>
      ) : (
        <div className="text-center border border-purple rounded-lg font-semibold text-purple p-4">
          {localCompetitionTime}
          <div>{timeLeft}</div>
        </div>
      )}
    </div>
    // <div className="bg-black-100 flex justify-center items-center pt-10 p-4 text-center">
    //   {false ? (
    //     <Link href="/register" className="w-full">
    //       <MagicButton title="Quick Registration" icon="" position="" />
    //     </Link>
    //   ) : (
    //     <div className="text-center border border-purple rounded-lg font-semibold text-purple p-4">
    //       {/* {localCompetitionTime} */}
    //       <div>website under maintainance.</div>
    //     </div>
    //   )}
    // </div>
  );
};

export default TimeUntilCompetition;
