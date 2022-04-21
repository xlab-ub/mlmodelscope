import FindUniqueNumbers from "./FindUniqueNumbers";

describe("FindUniqueNumbers", () => {
  it("Works with a small array of numbers", () => {
    const arr = [1, 2, 3, 1, 1, 1];
    const result = FindUniqueNumbers(arr);
    expect(result.indexOf(1) > -1).toBeTruthy();
    expect(result.indexOf(2) > -1).toBeTruthy();
    expect(result.indexOf(3) > -1).toBeTruthy();
  })

  it("Runs at a reasonable time on a large array of numbers", () => {
    const _4KImageArray = new Array(8294400).fill(0);

    const start = performance.now();
    const result = FindUniqueNumbers(_4KImageArray);
    const end = performance.now();

    const timeDiff = end - start;

    expect(timeDiff).toBeLessThan(1000);
  })
})
