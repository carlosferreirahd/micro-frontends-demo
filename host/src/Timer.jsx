import React, { useEffect, useState } from "react"

export function Timer({
  seconds = 0,
}) {

  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const t = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(t);
    };

  }, [timeLeft]);

  return (
    <div>
      <p>Timer: {timeLeft}</p>
      {timeLeft === 0 && <button onClick={() => setTimeLeft(seconds)}>restart</button>}
    </div>
  );
}
