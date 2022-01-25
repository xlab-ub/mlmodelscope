import { BehaviorSubject, Subject } from 'rxjs';

class Api {
  Models: Subject;

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.Models = new BehaviorSubject([]);
  }

  async getModels() {
    console.log("Getting models...")
    let result = await fetch(`${this.apiUrl}/models`);
    let data = await result.json();
    //console.log(data);

    this.Models.next(data.models);
  }
}

let api;

export default function GetApiHelper() {
  if (api === undefined)
    api = new Api();

  return api;
}
