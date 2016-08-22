function substring(string, start, end) {
  var substring = "";
  var temp;

  if (end === undefined) {
    end = string.length;
  }

  if (isNaN(start) || start < 0) {
    start = 0;
  }

  if (isNaN(end) || end < 0) {
    end = 0;
  }

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  for (var i = start; i < end; i++) {
    substring += string[i];
  }

  return substring;
}
