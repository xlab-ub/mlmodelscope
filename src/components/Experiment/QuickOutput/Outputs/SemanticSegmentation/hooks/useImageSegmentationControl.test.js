import useImageSegmentationControl from "./useImageSegmentationControl";
import React from "react";
import {JestImageSegmentationResult} from "../testData/TestFeatures";
import {shallow} from "enzyme";

describe("useImageSegmentationControl", () => {
  const TestComponent = () => {
    const {colorMap, rows} = useImageSegmentationControl(JestImageSegmentationResult);


    return <>
      {rows.map(row => <>
        {row.map(col => (<>{
          (colorMap.find((item) => {
            const itemNumber = item.number;
            return itemNumber === col[0]
          }).backgroundColor)
        }</>))}
      </>)}
    </>
  }

  it("renders without breaking", () => {
    const result = shallow(<TestComponent/>)

    expect(result).not.toBeNull();
  })


})
