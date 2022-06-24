import React from 'react';
import "./BackToTopButton.scss";

export default function BackToTopButton(props) {

  const getClass = () => {
    if (props.currentSection === 0) return "back-to-top-button  back-to-top-button__hidden";

    return "back-to-top-button";
  }
  return <button className={getClass()} onClick={() => props.goToSection(0)}>Back to top</button>
}
