function toLowerCase(string) {
  var result = "";
  var asciiNumeric;

  for (var i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);

    if (asciiNumeric > 64 && asciiNumeric < 91) {
      result += String.fromCharCode(asciiNumeric + 32);
    } else {
      result += string[i];
    }
  }

  return result;
}
