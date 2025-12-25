import { useState } from "react";

import { isInRange } from "@utils/helpers/unicode-range";

export const useLimitCounter = (initialNumber: number, min: number, max: number) => {
  const [count, setCount] = useState(initialNumber);

  if (!isInRange(count, [min, max])) setCount(min);

  const increment = () => {
    if (count + 1 > max) return;

    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count - 1 < min) return;

    setCount((prev) => prev - 1);
  };

  const resetCounter = () => setCount(initialNumber);

  return { count, increment, decrement, resetCounter, setCount };
};
