import ExperimentDetailHeader from "../ExperimentDetails/ExperimentDetailHeader";
import ModelHeader from "./ModelHeader";
import SelectedModelsBanner from "./SelectedModelsBanner";
import React from "react";

export function useModelListUI(props) {
    const makePageHeader = () => {
        if (props.add)
            return <ExperimentDetailHeader title={"Compare models"}
                                           subtitle={"Select models to compare. Search for a specific model or use filters to narrow your options."}/>
        else {
            return (<ModelHeader/>);
        }
    }

    const makeSelectedModelsBanner = () => {
        if (props.add) {
            return (<SelectedModelsBanner selectedModels={props.selectedModels} deselectModel={props.deselectModel}
                                          clearModels={props.clearModels} runModels={props.runModels}/>);
        }
    }


    return {makePageHeader, makeSelectedModelsBanner};
}