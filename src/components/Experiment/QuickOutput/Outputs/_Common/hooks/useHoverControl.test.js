import React from 'react';
import {useHoverControl} from "./useHoverControl";
import {shallow} from "enzyme";

describe("useHoverControl", () => {
  const HoverTestComponent = () => {
    const {enter, leave, property} = useHoverControl();

    const content = property || "No State";

    return <div>
      <button onClick={() => enter("test")} id={"enter"}>Enter</button>
      <button onClick={leave} id={"leave"}>Leave</button>
      <p id={"state"}>{content}</p>
    </div>
  }

  it("Doesn't break when rendering a component that calls the hook", () => {
    const result = shallow(<HoverTestComponent/>);

    expect(result).not.toBeNull();
  })

  it("Adjusts the hover state when enter is called", () => {
    const result = shallow(<HoverTestComponent/>);

    result.find("#enter").simulate("click");

    const text = result.find("#state").text();

    expect(text).toEqual("test");
  })

  it("Nullifies the hover state when leave is called", () => {
    const result = shallow(<HoverTestComponent/>);

    result.find("#enter").simulate("click");
    result.find("#leave").simulate("click");

    const text = result.find("#state").text();
    expect(text).toEqual("No State");
  })
})
