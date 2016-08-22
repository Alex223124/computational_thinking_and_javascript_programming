function anagram(word, list) {
  return list.filter(function(candidate){
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(source, target) {
  var sourceLetters = stringToSortedLetters(source);
  var targetLetters = stringToSortedLetters(target);
  return compareArrays(sourceLetters, targetLetters);
}

function stringToSortedLetters(string) {
  return string.toLowerCase().split("").sort();
}

function compareArrays(array1, array2) {
  var result = true;

  if (array1.length !== array2.length) { return false; }

  array1.forEach(function(char, index) {
    if (array1[index] !== array2[index]) {result = false; }
  });

  return result;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));
