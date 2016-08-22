function objectHasProperty(object, string) {
  var result = false;
  for (x in object) {
    if (x === string) {
      result = true;
    }
  }

  return result;
}

// var pets = { cat: "Simon", dog: "Dwarf", mice: null };
// console.log(objectHasProperty(pets, "dog"));
// console.log(objectHasProperty(pets, "lizard"));
// console.log(objectHasProperty(pets, "mice"));

function incrementProperty(object, string) {
  if (objectHasProperty(object, string)) {
    object[string]++;
  } else {
    object[string] = 1;
  }

  return object[string];
}

// var wins = { steve: 3, susie: 4 };
// console.log(incrementProperty(wins, "susie"));
// console.log(wins);
// console.log(incrementProperty(wins, "lucy"));
// console.log(wins);

function copyProperties(firstObj, secondObj) {
  var count = 0;
  for (property in firstObj) {
    secondObj[property] = firstObj[property];
    count++;
  }

  return count;
}

// var hal = { model: 9000, enabled: true };
// var sal = {};
// console.log(copyProperties(hal, sal));
// console.log(sal);

function wordCount(string) {
  var words = string.split(" ");
  var result = {};
  for (var i = 0; i < words.length; i++) {
    incrementProperty(result, words[i]);
  }

  return result;
}

// console.log(wordCount("box car cat bag box"));
