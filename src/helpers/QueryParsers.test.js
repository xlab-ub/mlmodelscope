import {getTaskFromQueryString} from "./QueryParsers";

describe("QueryParsers", () => {
  describe("GetTaskFromQueryString", () => {
    it("can get a task from a correctly formatted query string", () => {
      let result = getTaskFromQueryString("?task=image_classification");

      expect(result).toEqual("image_classification");
    })

    it("returns null when query string is empty", () => {
      let result = getTaskFromQueryString("");

      expect(result).toEqual(null);
    })
  })
})
