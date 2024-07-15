"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      //////////////////////////////////////////////////////////////////
      // for testing only
      now.setDate(now.getDate() + 4); // add day
      now.setHours(now.getHours() + 3); // add hour
      now.setMinutes(now.getMinutes() + 21); // add minute
      //////////////////////////////////////////////////////////////////
      const nextCompetition = getNextCompetitionTime();
      const diff = nextCompetition.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("The competition has started!");
        setTimerEnded(true);
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
        `${days}d ${hours}h ${minutes}m ${seconds}s left until the next competition`
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

  useEffect(() => {
    if (timerEnded) {
      console.log("Timer has ended. Perform your action here.");

      const oneMinuteLater = new Date();
      oneMinuteLater.setMinutes(oneMinuteLater.getMinutes() + 1); // Add one minute

      const rescheduleTimer = () => {
        const now = new Date();
        if (oneMinuteLater.getTime() - now.getTime() <= 0) {
          console.log("Rescheduling the timer for next competition.");
          setTimerEnded(false); // Reset timer ended state
          const nextCompetition = getNextCompetitionTime();
          const diff = nextCompetition.getTime() - new Date().getTime();
          const days = formatTime(Math.floor(diff / (1000 * 60 * 60 * 24)));
          const hours = formatTime(
            Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          );
          const minutes = formatTime(
            Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          );
          const seconds = formatTime(Math.floor((diff % (1000 * 60)) / 1000));
          setTimeLeft(
            `${days}d ${hours}h ${minutes}m ${seconds}s left until the next competition`
          );
        }
      };

      const rescheduleInterval = setInterval(rescheduleTimer, 1000);

      // Clear the reschedule interval after one minute
      setTimeout(() => {
        clearInterval(rescheduleInterval);
      }, oneMinuteLater.getTime() - new Date().getTime());
    }
  }, [timerEnded]);

  return <div>{timeLeft}</div>;
};

export default TimeUntilCompetition;
