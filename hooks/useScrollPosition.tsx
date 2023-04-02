/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useLayoutEffect, DependencyList } from "react";

const isBrowser: boolean = typeof window !== `undefined`;

function getScrollPosition(): Position {
  if (!isBrowser) return { x: 0, y: 0 };
  return { x: window.scrollX, y: window.scrollY };
}

export default function useScrollPosition(
  effect: ({
    prevPos,
    currPos,
  }: {
    prevPos: Position;
    currPos: Position;
  }) => void,
  deps: DependencyList,
  wait: number | undefined
) {
  const position = useRef(getScrollPosition());

  let throttleTimeout: NodeJS.Timeout | null = null;

  const callBack = () => {
    const currPos = getScrollPosition();
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
}

type Position = { x: number; y: number };
