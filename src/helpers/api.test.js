import GetApiHelper from "./api";
import expect from "expect";
import fetchMock from "fetch-mock";

const ApiRoot = process.env.REACT_APP_API_URL;

describe('The API helper', () => {

  beforeEach(() => {
    fetchMock.resetHistory();
  });

  let api = GetApiHelper();

  fetchMock.get(`begin:${ApiRoot}/models`, {
    models: [{}]
  });

  fetchMock.get(`begin:${ApiRoot}/frameworks`, {
    frameworks: [{}]
  });

  it('requests all models', async () => {
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

  it('requests all frameworks', async () => {
    let results;

    api.Frameworks.subscribe({
      next: (frameworks) => {
        results = frameworks;
      }
    });

    await api.getFrameworks();
    expect(fetchMock.called(`${ApiRoot}/frameworks`)).toBe(true);
    expect(results.length).toBe(1);
  });

  it('requests models of one framework', async () => {
    let results;

    api.Models.subscribe({
      next: (models) => {
        results = models;
      }
    });

    await api.getModels({ framework: 1 });
    expect(fetchMock.lastUrl()).toBe(`${ApiRoot}/models?framework=1`);
    expect(results.length).toBe(1);
  });

  it('requests models of one task', async () => {
    let results;

    api.Models.subscribe({
      next: (models) => {
        results = models;
      }
    });

    await api.getModels({ task: 1 });
    expect(fetchMock.lastUrl()).toBe(`${ApiRoot}/models?task=1`);
    expect(results.length).toBe(1);
  });

  it('requests model by ID', async () => {
    let results;

    api.ActiveModel.subscribe({
      next: (model) => {
        results = model;
      }
    });

    await api.getModel(1);
    expect(fetchMock.lastUrl()).toBe(`${ApiRoot}/models/1`);
    expect(results.length).toBe(1);
  })

  it('reports the anonymous user by default', async () => {
    let userId;

    api.ActiveUser.subscribe({
      next: (user) => {
        userId = user.id;
      }
    });

    expect(userId).toBe('anonymous');
  })
});
