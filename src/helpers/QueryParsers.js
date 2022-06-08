export const getTaskFromQueryString = (qs) => {
  return getQueryParameters(qs).task;
}

const getQueryParameters = (qs) => {
  return new Proxy(new URLSearchParams(qs), {
    get: (searchParams, prop) => searchParams.get(prop)
  });
}
