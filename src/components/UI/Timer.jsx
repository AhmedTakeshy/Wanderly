import React, { useState, useEffect } from "react";

const Timer = ({ time }) => {
  const [hours, setHours] = useState(time);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="flex items-center">
      <h3 className="mr-[2px]">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h3>
      <span>Left</span>
    </div>
  );
};

export default Timer;
