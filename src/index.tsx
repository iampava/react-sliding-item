// Inspiration: https://twitter.com/devongovett/status/1683882802977312770
import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import {
  motion,
  animate,
  BoundingBox,
  useMotionValue,
  useMotionTemplate,
  ValueAnimationTransition,
} from "framer-motion";

const inertiaTransition: ValueAnimationTransition = {
  type: "inertia",
  bounceStiffness: 300,
  bounceDamping: 40,
};

type Props = PropsWithChildren<
  {
    options?: {
      // Width of the left/right element in pixels.
      max?: number;

      // How far the user has to drag before the element is considered "swiped"
      // This is a numeric value between 0 and `max` and represents pixels.
      threshold?: number;
    };
  } & (
    | {
      right: JSX.Element;
      left?: JSX.Element;
    }
    | {
      right?: JSX.Element;
      left: JSX.Element;
    }
    | {
      right: JSX.Element;
      left: JSX.Element;
    }
  )
>;

const SlidingItem = ({ children, right, left, options }: Props) => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const max = options?.max || 150;
  const threshold = options?.threshold || 70;

  const x = useMotionValue(0);
  const xPx = useMotionTemplate`${x}px`;

  let dragConstraints: Partial<BoundingBox> | undefined = undefined;
  if (left === undefined) {
    dragConstraints = {
      right: 0,
    };
  }
  if (right === undefined) {
    dragConstraints = {
      left: 0,
    };
  }

  const resetAnimation = useCallback(() => {
    animate(x, 0);
  }, [x]);

  useEffect(() => {
    const { current } = leftRef;
    if (current !== null) {
      current.addEventListener("resetslide", resetAnimation);

      return () => {
        current?.removeEventListener("resetslide", resetAnimation);
      };
    }
  }, [left !== undefined, resetAnimation]);

  useEffect(() => {
    const { current } = rightRef;
    if (current !== null) {
      current.addEventListener("resetslide", resetAnimation);

      return () => {
        current?.removeEventListener("resetslide", resetAnimation);
      };
    }
  }, [right !== undefined, resetAnimation]);

  return (
    <motion.div
      drag={"x"}
      className="relative"
      // This adds the `x` CSS variable to the element, which we'll use to
      // calculate the size of left-right sections.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={{ x, "--x": xPx }}
      dragConstraints={dragConstraints}
      onDragEnd={() => {
        const currentXPosition = x.get();
        if (currentXPosition > 0 && left !== undefined) {
          // Dragging to the right
          const newXPosition = currentXPosition > threshold ? max : 0;
          animate(x, newXPosition, {
            ...inertiaTransition,
            min: newXPosition,
            max: newXPosition,
          });
        }

        if (currentXPosition < 0 && right !== undefined) {
          // Dragging to the right
          const newXPosition = currentXPosition > -threshold ? 0 : -max;
          animate(x, newXPosition, {
            ...inertiaTransition,
            min: newXPosition,
            max: newXPosition,
          });
        }
      }}
    >
      {left !== undefined && (
        <div
          ref={leftRef}
          style={{ width: `max(${max}px, var(--x))` }}
          className="absolute top-0 right-[100%] h-full flex"
        >
          {left}
        </div>
      )}
      {children}
      {right !== undefined && (
        <div
          ref={rightRef}
          className="absolute top-0 left-[100%] h-full flex"
          style={{ width: `max(${max}px, calc(-1 * var(--x)))` }}
        >
          {right}
        </div>
      )}
    </motion.div>
  );
};

const resetAnimation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  const event = new CustomEvent("resetslide", { bubbles: true });

  e.currentTarget.dispatchEvent(event);
};

export { SlidingItem, resetAnimation };
