import {ReactComponent as PlusIcon} from "../../resources/icons/plus-sign.svg";
import {ReactComponent as MinusIcon} from "../../resources/icons/minus-sign.svg";
import {ReactComponent as RightArrowIcon} from "../../resources/icons/arrow-right.svg";
import React from "react";

export default function useButtonClasses(props) {
    const generateBlockName = () => {
        let result = "";
        if (props.isSmall) {
            result = "small-button ";
        }
        if (props.isPrimary) {
            result = result + "primary-button";
        } else {
            result = result + "secondary-button";
        }
        return result;
    };

    const generateClassName = (element) => {
        let result = "";
        if (props.isSmall) {
            result = "small-button__" + element + " ";
        }
        if (props.isPrimary) {
            result = result + "primary-button__" + element;
        } else {
            result = result + "secondary-button__" + element;
        }
        return result;
    }

    const generateIcon = () => {
        if (props.icon === "plus") {
            return <span data-testid={"icon-plus"}><PlusIcon
                className={generateClassName("icon")}/></span>
        } else if (props.icon === 'minus') {
            return <span data-testid={"icon-minus"}><MinusIcon className={generateClassName("icon")}/></span>
        } else {
            return <span data-testid={"icon-arrow"}>
            <RightArrowIcon className={generateClassName("icon")}/>
            </span>;
        }
    };

    return {
        generateBlockName,
        generateClassName,
        generateIcon
    };
}