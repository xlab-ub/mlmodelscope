import { BehaviorSubject, Subject } from 'rxjs';

class Api {
  Models: Subject;
  Frameworks: Subject;
  ActiveModel: Subject;

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.Models = new BehaviorSubject([]);
    this.Frameworks = new BehaviorSubject([]);
    this.ActiveModel = new BehaviorSubject([]);
  }

  async getModels(filters) {
    let queries = "";
    if (filters !== undefined) {
      queries = "?" + Object.keys(filters).map(key => `${key}=${filters[key]}`).join("&");
    }
    let result = await fetch(`${this.apiUrl}/models${queries}`);
    let data = await result.json();

    this.Models.next(data.models);
  }

  async getModel(id) {
    let result = await fetch(`${this.apiUrl}/models/${id}`);
    let data = await result.json();

    this.ActiveModel.next(data.models);
  }

  async getFrameworks() {
    let result = await fetch(`${this.apiUrl}/frameworks`);
    let data = await result.json();

    this.Frameworks.next(data.frameworks);
  }
}

let api;

export default function GetApiHelper() {
  if (api === undefined)
    api = new Api();

  return api;
}
