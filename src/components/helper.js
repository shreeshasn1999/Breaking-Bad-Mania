export function makestring(elements) {
  let stringify = "";
  for (let i = 0; i < elements.length; i++) {
    stringify += `<span>${elements[i]}</span> ,`;
  }
  stringify = stringify.substring(0, stringify.length - 1);
  return stringify;
}
