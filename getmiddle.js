function getMiddle(str) {
  if (str.length % 2 !== 0) {
    return str[Math.floor(str.length / 2)];
  } else {
    return str.substr(Math.floor(str.length - 1) / 2, 2);
  }
}
