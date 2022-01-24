import GetApiHelper from "./api";
import expect from "expect";

it('exists', () => {
  let api = GetApiHelper();
});

it('can get models', async () => {
  let api = GetApiHelper();
  let results;
  api.Models.subscribe({
    next: (models) => {
      results = models;
    }
  });
  expect(results.length).greaterThan(0);
});
