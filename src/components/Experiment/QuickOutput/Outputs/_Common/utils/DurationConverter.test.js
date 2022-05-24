import DurationConverter from "./DurationConverter";

describe("DurationConverter", () => {
  it("works as intended", () => {
    const result = DurationConverter("492.161067ms");

    expect(result).toEqual("0.5s");
  })
})
