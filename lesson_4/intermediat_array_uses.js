function oddElementsOf(arr) {
  var result = [];
  for (var i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
}

function combinedArray(even, odd) {
  var result = [];
  for (var i = 0; i < even.length; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }

  return result;
}

function mirroredArray(arr) {
  var copy = arr.slice();
  return arr.concat(copy.reverse());
}

function joinArray(arr, joiner) {
  var result = "";
  if (!joiner) {
    joiner = "";
  }

  for (var i = 0; i < arr.length; i++) {
    if (i > 0) {
      result += joiner;
    }
    result += arr[i];
  }
  return result;
}

function sortDescending(arr) {
  function compareNumbers(a, b) { return b - a; }
  return arr.sort(compareNumbers);
}

function matrixSums(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var subtotal = 0;
    for (var j = 0; j < arr[i].length; j++) {
      subtotal += arr[i][j];
    }
    result.push(subtotal);
  }
  return result;
}

function uniqueElements(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    }
    result.push(arr[i]);
  }
  return result;
}
