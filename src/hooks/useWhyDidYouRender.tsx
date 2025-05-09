import { useEffect, useRef } from "react";
import { logChanges, shallowEqual } from "../helpers";

export const useWhyDidYouRender = (
  componentName: string,
  props: Record<string, any>
) => {
  const previousProps = useRef(props);

  useEffect(() => {
    if (!shallowEqual(previousProps.current, props)) {
      logChanges(componentName, previousProps.current, props);
    }

    previousProps.current = props;
  });
};
