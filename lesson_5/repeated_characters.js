function repeatedCharacters(string) {
  var string = string.toLowerCase();
  var result = {};

  for (var i = 0; i < string.length; i++) {
    var counter = 1;
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j] && !Object.keys(result).includes(string[i])) {
        counter++;
      }
    }

    if (counter > 1) {
      result[string[i]] = counter;
    }
  }

  return result;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
