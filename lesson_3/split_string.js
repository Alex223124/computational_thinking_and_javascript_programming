function splitString(string, delimiter) {
  var substring = "";
  var result = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      if (substring.length > 0) {
        result.push(substring);
      }
      substring = "";
    } else if (delimiter === "") {
      result.push(string[i]);
    } else {
      substring += string[i];
    }
  }

  if (substring.length > 0) {
    result.push(substring);
  }

  for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}
