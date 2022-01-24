import { BehaviorSubject, Subject } from 'rxjs';

class Api {
  Models: Subject;

  constructor() {
    this.Models = new BehaviorSubject([]);
  }

  async getModels() {
    console.log("Getting models...")
    let result = await fetch('https://staging.api.mlmodelscope.org/models');
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
