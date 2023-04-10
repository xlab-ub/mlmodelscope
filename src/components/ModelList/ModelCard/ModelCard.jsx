import React from "react";
import Task from "../../../helpers/Task";
import ModelTag from "../../Common/ModelTag";
import {ModelCardActions} from "./ModelCardActions";
import {ModelCardName} from "./ModelCardName";

const defaultProps = {
    actions: 'try',
    isAdded: false,
    selectModel: () => {
        alert('SELECTED')
    },
    deselectModel: () => {
        alert('DESELECTED')
    },
}

export default function ModelCard(givenProps) {
    const props = {...defaultProps, ...givenProps};

    const makeModelLink = () => {
        return "/model/" + props.model.id;
    }

    const makeClickHandler = () => {
        if (props.actions === 'try') {
            return () => window.location.href = (makeModelLink());
        } else if (props.actions === "add" && !props.isAdded) {
            return props.selectModel;
        } else if (props.actions === 'add' && props.isAdded) {
            return props.deselectModel;
        }
    }

    const model = props.model;
    let task = Task[model.output.type];
    if (!task) {
        task = new Task({name: model.output.type, description: "This task has no definition"});
    }
    let machineTagKey = 0;
    let machineTags = model.framework.architectures.map(machine => <ModelTag key={machineTagKey++} type="machine"
                                                                             content={machine.name}/>);


    return (
        <div onClick={makeClickHandler()}
             className={props.isAdded ? 'model-card model-card--active' : 'model-card'}>
            <ModelCardName {...props} makeModelLink={makeModelLink.bind(this)}/>

            <div className="model-card__tags-box">
                <div className={"model-card__tags-box-row"}>
                    <ModelTag type="task" content={task.name}/>
                    <ModelTag type="framework" content={model.framework.name}/>
                    {machineTags}
                </div>

                <hr className={"model-card__tags-box-divider"}/>
                <div className={"model-card__tags-box-row"}>
                    <p className={"model-card__tags-box-item"} children={model.attributes.training_dataset}/>

                    {model.attributes.Top1 &&
                        <>
                            <span className={"model-card__tags-box-item-divider"}>&bull;</span>
                            <p className={"model-card__tags-box-item"}
                               children={"Top 1: " + model.attributes.Top1 + "%"}/>
                            {model.attributes.Top1 &&
                                <span className={"model-card__tags-box-item-divider"}>&bull;</span>
                            }
                        </>
                    }
                    {model.attributes.Top5 &&
                        <>
                            <p className={"model-card__tags-box-item"}>
                                Top 5: {model.attributes.Top5}%
                            </p>

                        </>
                    }

                </div>

            </div>
            <ModelCardActions {...props} />
        </div>
    )
}

