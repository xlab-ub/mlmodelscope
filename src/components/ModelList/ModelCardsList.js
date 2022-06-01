import React, {Component} from "react";
import ModelCard from "./ModelCard";
import ModelListNoResults from "./NoResults";

export default class ModelCardsList extends Component {
  static defaultProps = {
    selectedModels: [],
    selectModel: () => {
    },
    deselectModel: () => {
    },
  }

  modelCards = () => {
    let modelKey = 0;
    return this.props.models.map(model => <ModelCard key={modelKey++} model={model}
                                                     actions={this.props.add ? 'add' : 'try'}
                                                     isAdded={this.selectedModelsInclude(model)}
                                                     selectModel={() => this.props.selectModel(model)}
                                                     deselectModel={() => this.props.deselectModel(model)}/>);
  }

  selectedModelsInclude(model) {
    return this.props.selectedModels.some(m => m.id === model.id);
  }

  hasNoModels() {
    return this.props.models.length === 0;
  }

  render() {
    if (this.hasNoModels())
      return <ModelListNoResults/>

    return (
      <div className={"model-card-list"}>
        {this.modelCards()}
      </div>
    );
  }
}
