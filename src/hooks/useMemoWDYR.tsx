import { useMemo, useEffect, useRef } from "react";
import { shallowEqual } from "../helpers";

export const useMemoWDYR = <T,>(factory: () => T, deps: any[]): T => {
  const previousDeps = useRef(deps);

  useEffect(() => {
    if (!shallowEqual(previousDeps.current, deps)) {
      console.log("[WDYR] useMemo deps changed", {
        from: previousDeps.current,
        to: deps,
      });
    }

    previousDeps.current = deps;
  });

  return useMemo(factory, deps);
};
