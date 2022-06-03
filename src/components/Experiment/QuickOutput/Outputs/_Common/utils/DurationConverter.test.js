import DurationConverter from "./DurationConverter";

describe("DurationConverter", () => {
  it("works as intended for ms outputs", () => {
    const result = DurationConverter("492.161067ms");

    expect(result).toEqual("0.5s");
  })
  it("works as intended for s outputs", () => {
    const result = DurationConverter("3.255233s");

    expect(result).toEqual("3.3s");
  })
  it("works as intended for m outputs", () => {
    const result = DurationConverter("1.5m");

    expect(result).toEqual("90s");
  })

  it("returns 0s when fed an invalid input", () => {
    const result = DurationConverter(undefined);
    
    expect(result).toEqual("0s")
  })
})
