import { BehaviorSubject, Subject } from 'rxjs';

const AnonymousUserId = 'anonymous';

class Api {
  Models: Subject;
  Frameworks: Subject;
  ActiveModel: Subject;

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.Models = new BehaviorSubject([]);
    this.Frameworks = new BehaviorSubject([]);
    this.ActiveModel = new BehaviorSubject([]);
    this.ActiveUser = new BehaviorSubject({ id: AnonymousUserId })
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

  /*
   * Look up a trial by ID. Returns an Observable of Trial details. Polls the trial data delivering results to
   * Observer(s) until either the trial is completed or a timeout has been reached at which time it will result
   * in an error.
   *
   * @param {string} trialId - The UUID of the trial to look up
   */
  getTrial(trialId) {
    const trialSubject = new Subject();

    this.poll({
      fn: this._getTrial,
      params: trialId,
      validate: trial => trial.completed_at !== undefined,
      maxAttempts: 10,
      subject: trialSubject
    });

    return trialSubject;
  }


  _getTrial = async (trialId) => {
    let result = await fetch(`${this.apiUrl}/trial/${trialId}`);
    let trial = await result.json();
    if (trial.results.responses === undefined)
      trial.results.responses = [{features: []}];

    return trial;
  }

  async runTrial(model, input) {
    const requestBody = {
      architecture: "amd64",
      inputs: [input],
      model: model.id,
      batchSize: 1,
      traceLevel: "NO_TRACE",
      gpu: false,
      desiredResultModality: "image_classification"
    }

    const response = await fetch(`${this.apiUrl}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    const result = await response.json();

    return result.trialId;
  }

  async poll({ fn, params, validate, maxAttempts, subject }) {
    let attempts = 0;
    let timeout = 250;

    const executePoll = async(resolve, reject) => {
      const result = await fn(params);
      attempts++;

      if (subject) {
        subject.next(result);
      }

      if (validate(result)) {
        return resolve(result);
      } else if (maxAttempts && attempts === maxAttempts) {
        return reject(new Error('max polling attempts exceeded'));
      } else {
        setTimeout(executePoll, timeout, resolve, reject);
        timeout += timeout;
      }
    };

    return new Promise(executePoll);
  }
}

let api;

export default function GetApiHelper() {
  if (api === undefined)
    api = new Api();

  return api;
}
