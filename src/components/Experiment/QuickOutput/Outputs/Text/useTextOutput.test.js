import { renderHook } from "@testing-library/react-hooks";
import useTextOutput from "./useTextOutput";
import expect from "expect";
import {
  TestTextOutput,
  TestTextOutputGeneratedToken,
} from "./testData/testTextOutput";
import { act } from "@testing-library/react";

describe("useTextOutput", () => {
  let result;

  beforeEach(() => {
    result = renderHook(() => useTextOutput(TestTextOutput)).result;
  });

  it("renders without breaking", () => {
    expect(result.current).toBeTruthy();
  });

  it("returns the output string", () => {
    expect(result.current.output).toEqual(
      "Luigi sagte mir oft, er wollte nie, dass die Brüder vor"
    );
  });

  it("returns an empty string when the trial response's object structure is incorrect", () => {
    result = renderHook(() => useTextOutput({})).result;
    expect(result.current.output).toEqual("");
  });

  it("returns the inference duration of the trial", () => {
    expect(result.current.inferenceDuration).toEqual("9.193807904s");
  });

  it("returns 0s when the trial response's object structure is incorrect", () => {
    result = renderHook(() => useTextOutput({})).result;
    expect(result.current.inferenceDuration).toEqual("0s");
  });

  it("returns the input string", () => {
    expect(result.current.input).toEqual(
      'translate English to German: "Luigi often said to me that he never wanted the brothers to end up in court," she wrote.'
    );
  });

  it("returns an empty string for input when the trial response's object structure is incorrect", () => {
    result = renderHook(() => useTextOutput({})).result;
    expect(result.current.input).toEqual("");
  });

  it("can update the input text", () => {
    act(() => {
      result.current.setInput("test");
    });

    expect(result.current.input).toEqual("test");
  });

  describe("with generated tokens type", () => {
    beforeEach(() => {
      result = renderHook(() =>
        useTextOutput(TestTextOutputGeneratedToken)
      ).result;
    });

    it("contains the expected output string", () => {
      expect(result.current.output).toEqual("Das Haus ist wunderbar .");
    });
  });
});
