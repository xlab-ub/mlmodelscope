import GetApiHelper from "./api";
import expect from "expect";
import fetchMock from "fetch-mock";

const ApiRoot = 'http://localhost:8080';

describe('The API helper', () => {
  it('requests all models', async () => {
    fetchMock.get(`${ApiRoot}/models`, {
      models: [{}]
    });
    let api = GetApiHelper();
    let results;

    api.Models.subscribe({
      next: (models) => {
        results = models;
      }
    });
    await api.getModels();

    expect(fetchMock.called(`${ApiRoot}/models`)).toBe(true);
    expect(results.length).toBe(1);
  });

})
