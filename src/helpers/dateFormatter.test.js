import formatDate from "./dateFormatter";
import expect from "expect";

describe("The date formatter", () => {
  it("converts date strings into correct format", () => {
    expect(formatDate("2022-04-15T20:03:20.352408Z")).toBe("April 15, 2022");
    expect(formatDate("2022-01-10T20:03:20.352408Z")).toBe("January 10, 2022");
  });
});
