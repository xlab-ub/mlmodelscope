import {useState} from "react";

export default function useModelListSelection() {
    const [selectedModels, setSelectedModels] = useState([]);

    const clearModels = () => {
        setSelectedModels([]);
    };

    const deselectModel = (model) => {
        setSelectedModels(selectedModels.filter((selectedModel) => selectedModel !== model));
    };

    const selectModel = (model) => {
        setSelectedModels([...selectedModels, model]);
    };

    return {
        clearModels,
        deselectModel,
        selectModel,
        selectedModels
    };
}