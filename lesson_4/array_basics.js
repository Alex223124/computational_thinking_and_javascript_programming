function lastInArray(array) {
  return array[array.length - 1];
}

function rollCall(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function reverseArray(array) {
  var result = [];

  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

function firstIndex(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function arrayToString(array) {
  var string = "";

  for (var i = 0; i < array.length; i++) {
    string += array[i];
  }

  return string;
}
