import React, { useState, useEffect } from "react";

function Countdown({ eventDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown">
      <h3>Countdown!</h3>
      {Object.keys(timeLeft).length ? (
        <div className="countdown-text">
          <span>{timeLeft.days} days, </span>
          <span>{timeLeft.hours}h,  </span>
          <span>{timeLeft.minutes}m, </span>
          <span>{timeLeft.seconds}s</span>
        </div>
      ) : (
        <span>It's party time!</span>
      )}
    </div>
  );
}

export default Countdown;