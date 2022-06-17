import {useEffect, useMemo, useRef, useState} from "react";

export default function useInView(threshold = 0.5, index = 0) {
  const [isInView, setIsInView] = useState(false);

  const ref = useRef();

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
          setIsInView(entry.isIntersecting),
        {
          threshold: threshold
        }
      ),
    [],
  );


  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);


  return {isInView, ref};
}
