import React, {memo, useCallback, useEffect, useState} from "react";

export const useSlider = ({value, ...config}) => {
  const [sliderVal, setSliderVal] = useState(value);

  const [configuration, setConfiguration] = useState(config);

  const onChange = useCallback(val => {
    setSliderVal(val);
  }, []);

  useEffect(() => {
    setConfiguration({
      ...config,
      onChange,
      value: sliderVal
    });
  }, [sliderVal]);

  return [sliderVal, configuration];
};

export const RangeSlider = memo(
  ({classes, label, onChange, value, ...sliderProps}) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [mouseState, setMouseState] = useState(null);

    useEffect(() => {
      setSliderVal(value);
    }, [value]);

    const changeCallback = e => {
      setSliderVal(e.target.value);
      onChange(e.target.value);
    };

    useEffect(() => {
      if (mouseState === "up") {
        onChange(sliderVal);
      }
    }, [mouseState]);
    return (
      <input
        type="range"
        value={sliderVal}
        {...sliderProps}
        className={`range-slider ${classes}`}
        id="range-slider"
        onChange={changeCallback}
        onMouseDown={() => setMouseState("down")}
        onMouseUp={() => setMouseState("up")}
      />
    );
  }
);

