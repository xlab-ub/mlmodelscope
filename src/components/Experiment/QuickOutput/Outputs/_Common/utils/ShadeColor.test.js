import ShadeColor from "./ShadeColor";

describe("ShadeColor", () => {
  it("Works as intended", () => {
    const result = ShadeColor("#123456", 20);

    expect(result).toEqual("#153e67");
  })
  it("Returns the same color when given 0 percent shading", () => {
    const result = ShadeColor("#123456", 0);

    expect(result).toEqual("#123456");
  })
})
