import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const INITIAL_TIME = 15 * 60 * 1000; // 15 minutes in milliseconds
// const INITIAL_TIME = 1 * 60 * 500; // testing

const SECOND = 1000;
const MINUTE = SECOND * 60;

interface CountdownItemProps {
  unit: "Minute" | "Second";
  text: string;
}

interface ShiftingCountdownProps {
  onEnd: () => void; // Callback function when the timer ends
}

const ShiftingCountdown: React.FC<ShiftingCountdownProps> = ({ onEnd }) => {
  return (
    <div className="pt-36 bg-gradient-to-br bg-black-100 p-4">
      <div className="mx-auto flex w-full max-w-5xl items-center bg-black-200">
        <CountdownItem unit="Minute" text="minutes" onEnd={onEnd} />
        <CountdownItem unit="Second" text="seconds" onEnd={onEnd} />
      </div>
    </div>
  );
};

const CountdownItem: React.FC<CountdownItemProps & { onEnd: () => void }> = ({
  unit,
  text,
  onEnd,
}) => {
  const { ref, time } = useTimer(unit, onEnd);

  return (
    <div className="flex h-24 w-1/2 flex-col items-center justify-center gap-1 border-r-[1px] border-slate-200 font-mono md:h-36 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-2xl text-white font-bold md:text-4xl lg:text-6xl xl:text-7xl"
        >
          {time}
        </span>
      </div>
      <span className="text-xs font-semibold text-slate-500 md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
};

const useTimer = (unit: "Minute" | "Second", onEnd: () => void) => {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("endTime");
    const endTime = savedEndTime
      ? parseInt(savedEndTime, 10)
      : Date.now() + INITIAL_TIME;

    if (!savedEndTime) {
      localStorage.setItem("endTime", endTime.toString());
    }

    intervalRef.current = setInterval(() => handleCountdown(endTime), 1000);

    return () => clearInterval(intervalRef.current || undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountdown = async (endTime: number) => {
    const now = Date.now();
    const distance = endTime - now;

    if (distance <= 0) {
      clearInterval(intervalRef.current!);
      setTime(0);
      onEnd();
      localStorage.removeItem("endTime");
      return;
    }

    let newTime = 0;

    if (unit === "Minute") {
      newTime = Math.floor(distance / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (unit === "Second" && newTime !== time) {
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      setTime(newTime);

      // Enter animation for seconds
      // await animate(
      //   ref.current,
      //   { y: ["50%", "0%"], opacity: [0, 1] },
      //   { duration: 0.35 }
      // );
    } else if (unit === "Minute" && newTime !== time) {
      setTime(newTime);
    }
  };

  return { ref, time };
};

export default ShiftingCountdown;
