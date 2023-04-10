import React from "react";
import ModelCard from "./ModelCard/ModelCard";
import ModelListNoResults from "./NoResults";

const defaultProps = {
  selectedModels: [],
  selectModel: () => {
  },
  deselectModel: () => {
  },
};

export default function ModelCardsList(givenProps) {
  const props = {...defaultProps, ...givenProps};

  const modelCards = () => {
    let modelKey = 0;
    return props.models.map(model => <ModelCard key={modelKey++} model={model}
                                                actions={props.add ? 'add' : 'try'}
                                                isAdded={selectedModelsInclude(model)}
                                                selectModel={() => props.selectModel(model)}
                                                deselectModel={() => props.deselectModel(model)}/>);
  }

  const selectedModelsInclude = (model) => {
    return props.selectedModels.some(m => m.id === model.id);
  }

  const hasNoModels = () => {
    return props.models.length === 0;
  }

  if (hasNoModels())
    return <ModelListNoResults/>

  return (
      <div className={"model-card-list"}>
        {modelCards()}
      </div>
  );
}
