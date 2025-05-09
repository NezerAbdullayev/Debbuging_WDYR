import { useState } from "react";

interface IUseCountReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCount = (defaultValue?: number): IUseCountReturn => {
  const [count, setCount] = useState(defaultValue ?? 0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(defaultValue ?? 0);

  return { count, increment, decrement, reset };
};
