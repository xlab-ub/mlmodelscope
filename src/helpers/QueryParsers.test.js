import {
  getModelListingParametersFromQueryString,
  getSearchParametersFromQueryString,
  getTaskFromQueryString
} from "./QueryParsers";

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
  describe("getSearchParametersFromQueryString", () => {
    it("can get a search parameter from a correctly formatted query string", () => {
      let result = getSearchParametersFromQueryString("?search=asdf");

      expect(result).toEqual("asdf");
    })

    it("returns null when query string is empty", () => {
      let result = getSearchParametersFromQueryString("");

      expect(result).toEqual(null);
    })
  })

  describe("getModelListingParametersFromQueryString", () => {
    it("can find each query parameter type", () => {
      let result = getModelListingParametersFromQueryString("?task=image_classification&framework=tensorflow&machine=amd64");

      expect(result.task).toEqual("image_classification");
      expect(result.framework).toEqual("tensorflow");
      expect(result.machine).toEqual("amd64");
    })
    it("will return nulls for parameters not found", () => {
      let result = getModelListingParametersFromQueryString("?task=image_classification&framework=tensorflow");

      expect(result.machine).toBeNull();
    })
  })

})
