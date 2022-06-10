export function SetQueryParameter(key, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState(null, null, url);
}

export function RemoveQueryParameter(key) {
  const url = new URL(window.location.href);
  url.searchParams.delete(key);
  window.history.replaceState(null, null, url);
}
