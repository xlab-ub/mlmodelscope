import React from "react";
import useButtonClasses from "./useButtonClasses";

const defaultProps = {
    icon: "arrow"
}
export default function Button(givenProps) {
    const props = {...defaultProps, ...givenProps};
    const {
        generateBlockName,
        generateClassName,
        generateIcon
    } = useButtonClasses(props);

    const handleClick = () => {
        if (typeof (props.onClick) === 'function')
            props.onClick();
    };

    return (
        <a href={props.link} className={generateBlockName()} onClick={() => {
            handleClick();
        }}>
        <span className={generateClassName("fill")}>
          <span className={generateClassName("text")}>{props.content}</span>
            {generateIcon()}
        </span>
        </a>
    )
}