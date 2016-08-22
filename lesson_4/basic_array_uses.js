function firstElementOf(arr) {
  return arr[0];
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

function nthElementOf(arr, idx) {
  return arr[idx];
}

function firstNOf(arr, length) {
  var result = [];
  for (var i = 0; i < length; i++) {
    result.push(arr[i]);
  }

  return result;
}

function lastNOf(arr, length) {
  if (arr.length - length < 0) {
    return arr;
  }

  return arr.slice(arr.length - length);
}

function endsOf(firstArray, secondArray) {
  return [firstArray[0], secondArray[secondArray.length - 1]];
}
