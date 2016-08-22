function substr(string, start, length) {
  var substring = "";

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = start; substring.length < length && i < string.length; i++) {
    substring += string[i];
  }

  return substring;
}
