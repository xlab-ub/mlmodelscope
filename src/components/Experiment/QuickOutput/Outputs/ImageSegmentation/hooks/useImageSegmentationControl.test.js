import useImageSegmentationControl from "./useImageSegmentationControl";
import React from "react";
import {TestImageSegmentationResult} from "../testData/TestFeatures";
import {shallow} from "enzyme";

describe("useImageSegmentationControl", () => {
  const TestComponent = () => {
    const {colorMap, rows} = useImageSegmentationControl(TestImageSegmentationResult);


    return <>
      {rows.map(row => <>
        {row.map(col => {
          colorMap.find((item) => {
            const itemNumber = item.number;
            return item.number == col
          }).backgroundColor
        })}
      </>)}
    </>
  }

  it("renders without breaking", () => {
    const result = shallow(<TestComponent/>)

    expect(result).not.toBeNull();
  })
})
