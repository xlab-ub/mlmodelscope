import {ReactComponent as Plus} from "../../../resources/icons/plus-sign.svg";
import {ReactComponent as Minus} from "../../../resources/icons/minus-sign.svg";
import React from "react";

export function ModelCardActions(props) {
    if (props.actions === 'add' && !props.isAdded) {
        return <Plus className={"model-card__icon"}/>

    } else if (props.actions === 'add' && props.isAdded) {
        return <Minus className={"model-card__icon model-card__icon-minus"}/>
    }
    return <></>
}