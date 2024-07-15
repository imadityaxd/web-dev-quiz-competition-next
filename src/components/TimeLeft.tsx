"use client";

import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const getNextCompetitionTime = (): Date => {
  const now = new Date();
  const nextSaturday = new Date(
    now.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7 || 7))
  );
  nextSaturday.setHours(21, 30, 0, 0); // Set to 9:30 PM

  return nextSaturday;
};

const formatTime = (time: number): string => {
  return time < 10 ? `0${time}` : time.toString();
};

const TimeUntilCompetition: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [timerEnded, setTimerEnded] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      //////////////////////////////////////////////////////////////////
      // for testing only
      now.setDate(now.getDate() + 5); // add day
      now.setHours(now.getHours() + 2); // add hour
      now.setMinutes(now.getMinutes() + 13); // add minute
      //////////////////////////////////////////////////////////////////
      const nextCompetition = getNextCompetitionTime();
      const diff = nextCompetition.getTime() - now.getTime();

      if (diff <= 0) {
        if (!timerEnded) {
          // Check if the timer hasn't ended yet
          console.log("competition started, do actions here");
          setTimeLeft("The competition has started!");
          setTimerEnded(true);
          router.push("/register");
        }
        return;
      }

      const days = formatTime(Math.floor(diff / (1000 * 60 * 60 * 24)));
      const hours = formatTime(
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = formatTime(
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = formatTime(Math.floor((diff % (1000 * 60)) / 1000));
      setTimeLeft(
        `${days}d ${hours}h ${minutes}m ${seconds}s left for competition`
      );
    };

    const timerInterval = setInterval(() => {
      if (!timerEnded) {
        updateTimer();
      }
    }, 1000);

    // Update immediately on component mount
    updateTimer();

    // Clear interval on component unmount
    return () => clearInterval(timerInterval);
  }, [timerEnded]);

  return <div>{timeLeft}</div>;
};

export default TimeUntilCompetition;
