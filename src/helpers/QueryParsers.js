export const getTaskFromQueryString = (qs) => {
  return getQueryParameters(qs).task;
}

export const getSearchParametersFromQueryString = (qs) => {
  return getQueryParameters(qs).search;
}


export const getModelListingParametersFromQueryString = (qs) => {
  let {task, framework, machine} = getQueryParameters(qs);
  return {
    task: task,
    framework: framework,
    machine: machine
  }
}

const getQueryParameters = (qs) => {
  return new Proxy(new URLSearchParams(qs), {
    get: (searchParams, prop) => searchParams.get(prop)
  });
}
