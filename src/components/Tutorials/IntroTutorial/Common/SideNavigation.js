import useBEMNaming from "../../../../common/useBEMNaming";
import React, {useRef, useState} from "react";
import "./SideNavigation.scss";
import {Step} from "./Step";

const links = [
  {
    name: "Intro to machine learning",
    index: 0
  },
  {
    name: "Model outputs",
    index: 2
  },
  {
    name: "Model training",
    index: 4
  },
  {
    name: "Comparing models",
    index: 6
  },
  {
    name: "Exploring other model tasks",
    index: 9
  }

];

export default function SideNavigation(props) {
  const [gradientWidth, setGradientWidth] = useState(299);
  const [gradientHeight, setGradientHeight] = useState(286);

  const {getBlock, getElement} = useBEMNaming("side-navigation");
  const mainRef = useRef();

  const getGradientStyle = () => ({width: `${gradientWidth}px`, height: `${gradientHeight}px`})

  // useEffect(() => {
  //   if (mainRef.current && gradientWidth === 0) {
  //     const {scrollWidth, scrollHeight} = mainRef.current;
  //     setGradientHeight(scrollHeight);
  //     setGradientWidth(scrollWidth);
  //   }
  // }, [mainRef.current])


  return <div className={getBlock()}>
    <div style={getGradientStyle()} className={getElement("gradient-outline")}></div>

    <div ref={mainRef} className={getElement("main-content")}>

      <div className={"content"}>
        {links.map(link => <Step goToSection={props.goToSection} isSelected={props.currentSection >= link.index}
                                 link={link}/>)}
      </div>
    </div>
  </div>

}
