import {RemoveQueryParameter, SetQueryParameter} from "./QuerySetters";

describe("QuerySetters", () => {
  describe("SetQueryParameter", () => {
    it("can update a url with a new parameter", () => {
      SetQueryParameter("name", "value");

      let updatedUrl = global.location.href;
      expect(updatedUrl).toEqual("http://localhost/?name=value");
    })
    it("replaces the url with an updated parameter when the parameter already exists", () => {
      SetQueryParameter("name", "value");
      SetQueryParameter("name", "value2");
      let updatedUrl = global.location.href;
      expect(updatedUrl).toEqual("http://localhost/?name=value2")

    })
  })
  describe("RemoveQueryParameter", () => {
    beforeEach(() => {
      SetQueryParameter("name", "value");
    })
    it("can remove a query parameter", () => {
      let url = global.location.href;
      expect(url).toEqual("http://localhost/?name=value")
      RemoveQueryParameter("name");
      let updatedUrl = global.location.href;
      expect(updatedUrl).toEqual("http://localhost/");
    })
    it("does not break when attempting to remove a query parameter that does not exist", () => {
      RemoveQueryParameter("i_dont_exist");

      let updatedUrl = global.location.href;
      expect(updatedUrl).toEqual("http://localhost/?name=value")
    })
  })
})
