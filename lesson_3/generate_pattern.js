function generatePattern(num) {
  var stars = "",
      lastRowString = "",
      width;

  for (var i = 1; i <= num; i++) {
    lastRowString += i;
  }

  width = lastRowString.length;

  for (var i = 1, string = ""; i <= num; i++) {
    string += i;
    while (stars.length + string.length < width) {
      stars += "*";
    }
    console.log(string + stars);
    stars = "";
  }
}
