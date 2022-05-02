class LocalStorageHelpersBase {
  _getByKey(key, skipParse = false) {
    let value = localStorage.getItem(key);
    if (skipParse)
      return value;
    return JSON.parse(value);
  }

  _setByKey(key, value, skipParse = false) {
    let stored = skipParse ? value : JSON.stringify(value);
    localStorage.setItem(key, stored);
  }

  _clearByKey(key) {
    localStorage.removeItem(key);
  }
}

export class SearchFiltersLocalStorage extends LocalStorageHelpersBase {
  //This is an assumed future requirement.  In the future, if search filters change drastically and there are still stored filters living in the users' browser, this could lead to some problems when attempting to load outdated filter versions.  With this, we can choose to invalidate any stored filters by bumping the version up
  version = "1";
  versionKey = "__search_filter_version__";
  keys = {
    SEARCH_FILTERS: "search_filters"
  };

  getFilters() {
    let value = this._getByKey(this.keys.SEARCH_FILTERS);
    if (!value || value[this.versionKey] !== this.version)
      value = null;
    else
      delete value[this.versionKey];
    return value;
  }

  setFilters(value) {
    value[this.versionKey] = this.version;

    this._setByKey(this.keys.SEARCH_FILTERS, value);
  }

  clearFilters() {
    this._clearByKey(this.keys.SEARCH_FILTERS);
  }

}
