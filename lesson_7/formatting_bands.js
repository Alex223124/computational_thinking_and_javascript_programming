function processBands(bands) {
  return bands.map(function(band) {
    var formattedName = capitalizePhrase(removeDots(band.name));
    return {
      name: formattedName,
      country: "Canada",
      active: band.active
    };
  });
}

function capitalizePhrase(phrase) {
  var capitalized = phrase.split(" ").map(function(word) {
    return capitalizeString(word);
  }).join(" ");
  return capitalized;
}

function capitalizeString(string) {
  var initial = string[0].toUpperCase();
  var rest = string.slice(1);

  return initial + rest;
}

function removeDots(string) {
  var wordsArray = string.split(" ");

  return wordsArray.map(function(word) {
    return word.split("").filter(function(char) {
      return char !== ".";
    }).join("");
  }).join(" ");

  return filteredCharsArray;
}

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

processBands(bands).forEach(function(band) {
  console.log(band.name);
  console.log(band.country);
  console.log(band.active);
});
