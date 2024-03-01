import { useState } from "react";
import SampleInputsTab from "./Tabs/SampleInput/SampleInputsTab";
import UploadInputsTab from "./Tabs/UploadInput/UploadInputsTab";
import URLInputsTab from "./Tabs/URLInput/URLInputsTab";
import clone from "../../../helpers/cloner";
import { QuickInputType } from "./quickInputType";
import TextInputTab from "./Tabs/TextInput/TextInputTab";
import UploadTextInputTab from "./Tabs/UploadTextInput/UploadTextInputTab";

export default function useQuickInputControl(props) {
  const [selectedInputs, setSelectedInputs] = useState([""]);
  const [selectedTab, setSelectedTab] = useState(0);

  const getTabs = (type = QuickInputType.Image) => {
    const sample = {
      id: 'sample-input',
      title: 'Sample inputs',
      component: SampleInputsTab,
      props: { sampleInputs: props.sampleInputs, type: type }
    };
    const upload = type === QuickInputType.Image || type === QuickInputType.Video ?
      { id: 'upload-input', title: 'Upload', component: UploadInputsTab, props: { type: type } } :
      { id: 'upload-input', title: 'Upload', component: UploadTextInputTab };
    const input = type === QuickInputType.Image || type === QuickInputType.Video ?
      { id: 'url-input', title: 'URL', component: URLInputsTab, props: { type: type } } :
      { id: 'text-input', title: 'Text', component: TextInputTab };

    const tabs = [];

    if (!props.hideSample) tabs.push(sample);
    if (!props.hideUpload) tabs.push(upload);
    if (!props.hideUrl) tabs.push(input);

    return tabs;
  };
  const runModel = () => {
    if (typeof (props.onRunModelClicked) === 'function')
      props.onRunModelClicked(selectedInputs.filter(url => url));
  };
  const selectInput = (url, index) => {
    let selected = selectedInputs;
    if (index)
      selected[index] = url;
    else
      selected = Array.isArray(url) ? url : [url];
    setSelectedInputs(selected);
  };
  const addInput = (url = "") => {
    let state = clone(selectedInputs);
    if (typeof url !== "string") url = "";

    state.push(url);
    setSelectedInputs(state);
  };
  const removeInput = (url) => {
    let selected = Array.from(selectedInputs);
    selected = selected.filter(u => u !== url);
    setSelectedInputs(selected);
  };
  const selectTab = (index) => {
    setSelectedInputs([""]);
    setSelectedTab(index);
  };
  const tabIsSelected = (index) => selectedTab === index;


  return { selectedInputs, getTabs, runModel, selectInput, addInput, removeInput, selectTab, tabIsSelected };
}
