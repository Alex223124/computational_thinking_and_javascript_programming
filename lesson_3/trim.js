function trim(string) {
  return trimRight(trimLeft(string));
}

function trimLeft(string) {
  var copyMode = false;
  var trimmedString = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] == " " && copyMode == false) {
      continue;
    } else {
      copyMode = true;
      trimmedString += string[i];
    }
  }

  return trimmedString;
}

function trimRight(string) {
  var copyMode = false;
  var trimmedString = "";

  for (var i = string.length - 1; i >=0; i--) {
    if (string[i] == " " && copyMode == false) {
      continue;
    }
    else {
      copyMode = true;
      trimmedString = string[i] + trimmedString;
    }
  }
  return trimmedString;
}
