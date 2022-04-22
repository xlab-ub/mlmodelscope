import FindStartX from "./FindStartX";

describe("FindStartX", () => {
  it("Returns 0 for zero index inputs", () => {
    const arr = [[1, 2, 3], [3, 4, 5]];
    const result = FindStartX(arr, 0);

    expect(result).toEqual(0);
  })
  it("Returns 3 for the given input", () => {
    const arr = [[1, 2, 3], [3, 4, 5]];
    const result = FindStartX(arr, 1);

    expect(result).toEqual(3);
  })
})
