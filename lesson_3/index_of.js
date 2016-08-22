function indexOf(firstString, secondString) {
  var matchCount;
  var limit = firstString.length - secondString.length;

  for (var i = 0; i <= limit; i++) {
    matchCount = 0

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] == secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount == secondString.length) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  var matchCount;
  var limit = firstString.length - secondString.length;

  for (var i = limit; i >= 0; i--) {
    matchCount = 0

    for (var j = secondString.length - 1; j >= 0; j--) {
      if (firstString[i + j] == secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount == secondString.length) {
      return i;
    }
  }

  return -1;
}
