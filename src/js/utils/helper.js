export function $(selector, el = document) {
  return el.querySelector(selector);
}

export function $all(selector, el = document) {
  return el.querySelectorAll(selector);
}
