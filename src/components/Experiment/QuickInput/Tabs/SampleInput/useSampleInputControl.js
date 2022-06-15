import {useState} from "react";

export default function useSampleInputControl(props) {
  const [selectedIndex, setSelectedIndex] = useState([]);

  const isSelected = (url) => selectedIndex.indexOf(url.src) > -1;
  const isUnselected = (url) => selectedIndex.length >= 0 && selectedIndex.indexOf(url.src) === -1;

  const selectInput = (index) => {

    if (props.multiple) {
      const selected = Array.from(selectedIndex);
      const url = props.sampleInputs[index].src;
      let storedIndex = selected.indexOf(url);
      if (storedIndex === -1) {
        selected.push(url);
      } else {
        selected.splice(storedIndex, 1);
      }
      setSelectedIndex(selected);
      if (typeof (props.inputSelected) === 'function')
        props.inputSelected(selected);
    } else {
      setSelectedIndex([props.sampleInputs[index].src])
      if (typeof (props.inputSelected) === 'function')
        props.inputSelected(props.sampleInputs[index].src, 0);
    }
  }

  return {selectedIndex, selectInput, isSelected, isUnselected};
}
