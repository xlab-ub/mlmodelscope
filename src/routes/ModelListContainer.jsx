import React from "react";
import ModelListWithFilters from "../components/ModelList/ModelListWithFilters";
import useModelListContainer from "./useModelListContainer";

const defaultProps = {
    add: false,
    runModels: () => {
    },
    selectedModels: [],
}

export default function ModelListContainer(givenProps) {
    const props = {...defaultProps, ...givenProps};
    const {models, frameworkOptions} = useModelListContainer(props);

    let machineOptions = [
        {name: "amd64", label: "amd64", isActive: false},
    ];
    return <ModelListWithFilters frameworkOptions={frameworkOptions} machineOptions={machineOptions}
                                 models={models} add={props.add}
                                 selectedModels={props.selectedModels} runModels={props.runModels}
                                 hideTaskFilters={props.hideTaskFilters ?? false} task={props.task}/>;
}

