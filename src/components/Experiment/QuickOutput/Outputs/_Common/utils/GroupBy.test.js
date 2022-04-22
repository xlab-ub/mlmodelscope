import GroupBy from "./GroupBy";

describe("GroupBy", () => {
  it("Can group an array of objects", () => {
    const arr = [{prop: "Hello", prop2: 2}, {prop: "Hello", prop2: 42}, {prop: "World", prop2: 2}];
    const result = GroupBy(arr, "prop");
    const keyLength = Object.keys(result).length;

    expect(keyLength).toEqual(2);
    expect(Array.isArray(result["Hello"])).toEqual(true);
    expect(result["Hello"].length).toEqual(2);
  })
  it("Can group an array of nested objects", () => {
    const arr = [{prop: "Hello", prop2: 2, obj: {test: 1}}, {prop: "Hello", prop2: 42, obj: {test: 1}}, {
      prop: "World",
      prop2: 2,
      obj: {test: 2}
    }];

    const result = GroupBy(arr, "obj", "test");
    const keyLength = Object.keys(result).length;

    expect(keyLength).toEqual(2);
  })
})
