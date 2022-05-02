import {SearchFiltersLocalStorage} from "./localStorage";

describe("LocalStorage", () => {
  describe("SearchFilters", () => {
    let storageHelper = new SearchFiltersLocalStorage();
    const originalVersion = storageHelper.version;
    beforeEach(() => {
      storageHelper.version = originalVersion;
      storageHelper.clearFilters();
    })

    it("can set a value without breaking", () => {
      storageHelper.setFilters({test: "hello world"});
      expect(localStorage.getItem(storageHelper.keys.SEARCH_FILTERS)).not.toBeNull();
    })
    it("stored data survives round trip", () => {
      storageHelper.setFilters({test: "hello world"});
      let result = storageHelper.getFilters();
      expect(result.test).toEqual("hello world");
    })
    it("invalidates out of date stored searches", () => {
      storageHelper.setFilters({test: "hello world"});
      storageHelper.version = "-9999";
      let result = storageHelper.getFilters();
      expect(result).toBeNull();
    })
    it("does not keep local storage version property on outputted object", () => {
      storageHelper.setFilters({test: "hello world"});
      let result = storageHelper.getFilters();
      expect(result[storageHelper.versionKey]).toBeFalsy();
    })
  })
})
