import MultipleSort, {ascending, descending} from "./MultipleSort";

describe("Multiple Sort", () => {
  const defaultArray = [
    {a: 150, b: "test"},
    {a: 34, b: "hi"},
    {a: 1111, b: "chicken"},
    {a: 9, b: "toast"},
    {a: 34, b: "hallo"}
  ]

  it("can sort by a single numeric property", () => {
    let result = MultipleSort(defaultArray, ["a"]);

    expect(result[0].a).toEqual(9);
  })

  it("can sort descending", () => {
    let result = MultipleSort(defaultArray, [["a", descending]]);

    expect(result[0].a).toEqual(1111);
  })

  it("can sort by multiple properties", () => {
    let result = MultipleSort(defaultArray, [["a", ascending], ["b", ascending]]);

    expect(result[1].b).toEqual("hallo");
    expect(result[2].b).toEqual("hi");
  })
  it("will sort by multiple properties descending", () => {
    let result = MultipleSort(defaultArray, [["a", ascending], ["b", descending]]);

    expect(result[2].b).toEqual("hallo");
    expect(result[1].b).toEqual("hi");
  })

  it("can sort by a predicate", () => {
    let result = MultipleSort(defaultArray, [(val) => val.a]);

    expect(result[0].a).toEqual(9);
  })
  it("can mix and match predicates, properties, and tuples", () => {
    let result = MultipleSort(defaultArray, ["a", [(val) => val.b, descending]]);

    expect(result[2].b).toEqual("hallo");
    expect(result[1].b).toEqual("hi");
  })
})
