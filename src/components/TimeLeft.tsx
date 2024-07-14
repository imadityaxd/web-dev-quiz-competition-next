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
      //    Use this in production
      const now = new Date();
      //////////////////////////////////////////////////////////////////

      now.setDate(now.getDate() + 6); //add day
      now.setHours(now.getHours() + 3); //add hour
      now.setMinutes(now.getMinutes() + 18); //add minute
      //////////////////////////////////////////////////////////////////
      const nextCompetition = getNextCompetitionTime();
      const diff = nextCompetition.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("The competition has started!");
        setTimerEnded(true);
        return;
      }

      if (diff > 2 * 24 * 60 * 60 * 1000) {
        const day = nextCompetition.toLocaleString("en-US", {
          weekday: "long",
        });
        const date = nextCompetition.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
        });
        const time = nextCompetition.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
        setTimeLeft(`Next competition is on ${day} at ${time} (${date})`);
      } else {
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
      // Perform the action when the timer ends
      console.log("Timer has ended. Perform your action here.");
      // Example action: redirect to another page or show a message
      // window.location.href = '/some-page';
    }
  }, [timerEnded]);

  return <div>{timeLeft}</div>;
};

export default TimeUntilCompetition;
