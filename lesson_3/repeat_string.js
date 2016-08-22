function repeat(string, times) {
  var result = "";

  if (times < 0 || isNaN(times)) {
    return undefined;
  }

  for (var i = 0; i < times; i++) {
    result += string;
  }

  return result;
}
