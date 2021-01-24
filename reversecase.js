function reverseCase(str) {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      output.push(str[i].toLowerCase());
    } else if (str[i] === str[i].toLowerCase()) {
      output.push(str[i].toUpperCase());
    }
  }
  return output.join("");
}
