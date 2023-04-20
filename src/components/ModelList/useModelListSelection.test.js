import {act, renderHook} from "@testing-library/react-hooks";
import useModelListSelection from "./useModelListSelection";
import {defaultModels} from "./TestData";

describe("useModelListSelection", () => {
    let result;

    beforeEach(() => {
        result = renderHook(() => useModelListSelection()).result;
    })

    it("should return a list of selected models", () => {
        expect(result.current.selectedModels).toEqual([])
    })

    it("should be able to select a model", () => {
        const model = defaultModels[0];

        act(() => {
            result.current.selectModel(model);
        })

        expect(result.current.selectedModels).toEqual([model]);
    })

    it("should be able to deselect a model", () => {
        const model = defaultModels[0];

        act(() => {
            result.current.selectModel(model);
        })

        act(() => {
            result.current.deselectModel(model);
        })

        expect(result.current.selectedModels).toEqual([]);
    })

    it("should be able to clear a list of multiple models", () => {
        const model1 = defaultModels[0];
        const model2 = defaultModels[1];

        act(() => {
            result.current.selectModel(model1);
        })

        act(() => {
            result.current.selectModel(model2);
        })

        act(() => {
            result.current.clearModels();
        })

        expect(result.current.selectedModels).toEqual([]);
    })
})