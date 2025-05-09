import { useRef } from "react";
import { useUpdateEffect } from "ahooks";
import { shallowEqual } from "../helpers";

export const useUpdateEffectWDYR = (
  effect: React.EffectCallback,
  deps: any[],
  label?: string
) => {
  const previousDeps = useRef(deps);

  useUpdateEffect(() => {
    if (!shallowEqual(previousDeps.current, deps)) {
      console.log(
        `[WDYR] useUpdateEffect deps changed${label ? ` (${label})` : ""}`,
        {
          from: previousDeps.current,
          to: deps,
        }
      );
    }

    previousDeps.current = deps;
    return effect();
  }, deps);
};
