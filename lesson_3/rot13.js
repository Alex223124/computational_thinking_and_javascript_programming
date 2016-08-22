function rot13(string) {
  var result = "";

  for (var i = 0; i < string.length; i++) {
    var charCode = string.charCodeAt(i);

    // encode an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      if (charCode + 13 > 90) { charCode -= 13; }
      else { charCode += 13; }
    }
    // encode a lowercase letter
    if (charCode >= 97 && charCode <= 122) {
      if (charCode + 13 > 122) { charCode -= 13; }
      else { charCode += 13; }
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}
