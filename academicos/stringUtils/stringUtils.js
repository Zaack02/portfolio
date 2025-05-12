function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}

console.log("Reversed:", reverseString("portfolio"));
console.log("Character count:", countCharacters("portfolio"));
