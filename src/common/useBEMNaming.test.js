import useBEMNaming from "./useBEMNaming";
import React from 'react';
import {renderHook} from "@testing-library/react-hooks";


describe("useBEMNaming", () => {
    let result;

    beforeEach(() => {
        result = renderHook(() => useBEMNaming("test-component")).result;
    })

    it("Can set the block name based on the given base name", () => {
        expect(result.current.getBlock()).toEqual("test-component");
    })

    it("Can set the element name based on the given base name with no state", () => {
        expect(result.current.getElement("test-element")).toEqual("test-component__test-element");
    })
})
