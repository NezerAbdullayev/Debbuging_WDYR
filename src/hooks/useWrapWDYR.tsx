import { useEffect, useRef } from "react";
import { shallowEqual } from "../helpers/shallowEqual";

type HookFunction<T> = (...args: any[]) => T;

export const useWrapWDYR = <T,>(
  hook: HookFunction<T>,
  fn: () => T,
  deps: any[],
  label?: string
): T => {
  const previousDeps = useRef(deps);
  console.log(hook);
  useEffect(() => {
    if (!shallowEqual(previousDeps.current, deps)) {
      console.log(`[WDYR] ${label || "deps changed"}`, {
        from: previousDeps.current,
        to: deps,
      });
    }
    previousDeps.current = deps;
  });

  return hook(fn, deps);
};
