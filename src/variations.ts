export function getNumberOfChars(name: string) {
  // number of characters in: name
return name.length;
}

export function getFirstChar(name: string) {
  // first character of: name
return name.slice(0, 1);
}

export function getLastChar(name: string) {
  // last character of: name
return name.slice(-1);
}

export function getLower(name: string) {
  // name all in lower case (example: "ABC" becomes "abc")
return name.toLowerCase();
}

export function getUpper(name: string) {
  // name all in upper case (example: "abc" becomes "ABC")
return name.toUpperCase();
}