import trim from "./labelTrimmer";
import expect from "expect";

describe("The label trimmer", () => {
  it("Removes the ugly chunk", () => {
    let catResult = trim("n28290472 cat");
    let burgerResult = trim("n38273917 burger");
    expect(catResult).toBe("cat");
    expect(burgerResult).toBe("burger");
  });

  it("Does not mess up normal labels", () => {
    let catResult = trim("cat");
    expect(catResult).toBe("cat");
  });

  it("Does not remove normal labels that start with n", () => {
    let nightResult = trim("night");
    expect(nightResult).toBe("night");
  })
});
