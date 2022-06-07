import {useState} from "react";

export default function useToggleableState(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => setValue(!value);

  return [value, toggle];
}
