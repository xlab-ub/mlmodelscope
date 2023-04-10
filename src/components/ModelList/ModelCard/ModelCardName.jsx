import React from "react";

export function ModelCardName(props) {
    const model = props.model;
    const text = `${model.name}`

    if (props.actions === 'try') {
        return (
            <a className="model-card__model-name" href={props.makeModelLink()}>{text}</a>
        )
    }
    return <p className="model-card__model-name"
              onClick={() => props.isAdded ? props.deselectModel() : props.selectModel()}>{text}</p>
}