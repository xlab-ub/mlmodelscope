import ParseProbability from "./ParseProbability";

describe("ParseProbability", () => {
  it("correctly displays .3223 as 32%", () => {
    const result = ParseProbability(.3223);

    expect(result).toEqual("32%");
  })
  it("correctly displays .002 as <1%", () => {
    const result = ParseProbability(.002);
    expect(result).toEqual("<1%");
  });
  it("does not show percentage when passed the option to hide percentages", () => {
    const result = ParseProbability(0.5, false);
    expect(result).toEqual("50");
  })
})
