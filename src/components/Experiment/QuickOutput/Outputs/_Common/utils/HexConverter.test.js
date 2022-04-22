import {ConvertHexToRGB} from "./HexConverter";

describe("ConvertHexToRGB", () => {
  it("works as intended with a pure white color", () => {
    const rgb = ConvertHexToRGB("#FFFFFF");
    expect(rgb.r).toEqual(255);
    expect(rgb.g).toEqual(255);
    expect(rgb.b).toEqual(255);

  })
})
