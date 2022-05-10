import {useEffect, useRef, useState} from "react";

export default function useImageRef() {
  const [imageHeight, setImageHeight] = useState(800);

  const imageRef = useRef(null);

  const findNewHeight = () => {
    const img = imageRef.current;
    if (img && img.complete)
      setImageHeight(img.clientHeight);
    else if (img)
      img.addEventListener('load', findNewHeight);
  }

  useEffect(() => {
    findNewHeight();
  })
  useEffect(() => {
    const listener = window.addEventListener("resize", () => {
      findNewHeight();
    });

    return () => {
      window.removeEventListener("resize", listener);
    }
  }, [])


  return {imageRef, imageHeight};
}
