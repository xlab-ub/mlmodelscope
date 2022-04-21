import splitIntoRows from "./splitIntoRows";

describe("splitIntoRows", () => {
  it("works as intended", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const width = 2;

    const result = splitIntoRows(arr, width);

    expect(result.length).toEqual(3);
  })

  it("is efficient with a very large array", () => {
    const arr = new Array(8294400).fill(0);
    const width = 2180;

    const start = performance.now();
    const result = splitIntoRows(arr, width);
    const end = performance.now();

    const timeDiff = end - start;

    expect(timeDiff).toBeLessThan(1000);
  })
})
