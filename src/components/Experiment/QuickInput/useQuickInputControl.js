import {useState} from "react";
import SampleInputsTab from "./Tabs/SampleInput/SampleInputsTab";
import UploadInputsTab from "./Tabs/UploadInput/UploadInputsTab";
import URLInputsTab from "./Tabs/URLInput/URLInputsTab";
import clone from "../../../helpers/cloner";

export default function useQuickInputControl(props) {
  const [selectedInputs, setSelectedInputs] = useState([""]);
  const [selectedTab, setSelectedTab] = useState(0);

  const getTabs = () => {
    const sample = {
      id: 'sample-input',
      title: 'Sample inputs',
      component: SampleInputsTab,
      props: {sampleInputs: props.sampleInputs}
    }
    const upload = {id: 'upload-input', title: 'Upload', component: UploadInputsTab};
    const url = {id: 'url-input', title: 'URL', component: URLInputsTab}

    const tabs = [];

    if (!props.hideSample) tabs.push(sample);
    if (!props.hideUpload) tabs.push(upload);
    if (!props.hideUrl) tabs.push(url);

    return tabs;
  }
  const runModel = () => {
    if (typeof (props.onRunModelClicked) === 'function')
      props.onRunModelClicked(selectedInputs.filter(url => url));
  }
  const selectInput = (url, index) => {
    let selected = selectedInputs;
    if (index)
      selected[index] = url;
    else
      selected = Array.isArray(url) ? url : [url];
    setSelectedInputs(selected);
  }
  const addInput = (url = "") => {
    let state = clone(selectedInputs);
    if (typeof url !== "string") url = "";

    state.push(url);
    setSelectedInputs(state);
  }
  const removeInput = (url) => {
    let selected = Array.from(selectedInputs);
    selected = selected.filter(u => u !== url);
    setSelectedInputs(selected);
  }
  const selectTab = (index) => {
    setSelectedInputs([""]);
    setSelectedTab(index);
  }
  const tabIsSelected = (index) => selectedTab === index;


  return {selectedInputs, getTabs, runModel, selectInput, addInput, removeInput, selectTab, tabIsSelected};
}
