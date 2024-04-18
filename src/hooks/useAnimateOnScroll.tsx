import { useState, RefObject, useEffect } from "react";

export default function useAnimateOnScroll(
  ref: RefObject<any>,
  classes?: string[],
) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {

    const animate = () => {
      const offset = document.documentElement.clientHeight + window.scrollY;
      const scrollHeight =
          ref.current.getBoundingClientRect().top + window.scrollY;
      if (offset >= scrollHeight && !animated) {
        setAnimated(true);
        if (classes) ref.current.classList.add(classes.join(" "));
      } else if (offset <= scrollHeight && animated) {
        setAnimated(false);
        if (classes) ref.current.classList.remove(classes.join(" "));
      }
    }

    window.addEventListener("scroll", animate);
    return () => {
      window.removeEventListener("scroll", animate)
    }
  }, [classes, ref]);

  return animated;
}
