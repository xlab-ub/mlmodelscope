import {shallow, render} from "enzyme";
import SearchBar from "./SearchBar";
import React  from 'react';

describe("SearchBar", () => {
  it("renders without breaking", () => {
    const result = render(<SearchBar searchText={""} updateSearchText={jest.fn()} />)

    expect(result).not.toBe(null);
  })

  it("Shows clear button when searchText is not empty", () => {
    const result = shallow(<SearchBar searchText={"not empty"} updateSearchText={jest.fn()} />)

    const elem = result.find(".search-bar__tag--visible")

    expect(elem.length).not.toBe(0);
  })

  it("Does not show clear button when searchText is empty", () => {
    const result = shallow(<SearchBar searchText={""} updateSearchText={jest.fn()} />)

    const elem = result.find(".search-bar__tag--visible")

    expect(elem.length).toBe(0);
  })

  it("Calls updateSearchText when search input is typed into", () => {
    const mockFn = jest.fn();

    const result = shallow(<SearchBar searchText={""} updateSearchText={mockFn} />)

    const input = result.find("input");

    input.simulate("change", {target: {value: "hello world"}});

  expect(mockFn).toBeCalled();
  })

  it("Calls updateSearchText when clear button is clicked", () => {
    const mockFn = jest.fn();

    const result = shallow(<SearchBar searchText={"something"} updateSearchText={mockFn} />)

    const button = result.find(".search-bar__tag--visible");

    button.simulate("click");

    expect(mockFn).toBeCalled();
  })

})
