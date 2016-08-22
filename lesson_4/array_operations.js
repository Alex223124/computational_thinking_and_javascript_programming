function push(array, value) {
  array[array.length] = value;
  return value;
}

function pop(array) {
  var newLength = array.length - 1;
  var lastValue = array[newLength];
  array.length = newLength;
  return lastValue;
}

function shift(array) {
  var firstValue = array[0];
  var newLength = array.length - 1;

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = newLength;
  return firstValue;
}

function unshift(array, value) {
  for (var len = array.length, i = len; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}

function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function slice(array, startIdx, endIdx) {
  var result = [];
  for (var i = startIdx; i < endIdx; i++) {
    push(result, array[i]);
  }
  return result;
}

function splice(array, startIdx, number) {
  var endIdx = startIdx + number;
  var result = slice(array, startIdx, endIdx);
  var remainingValues = [];

  for (var i = array.length - 1; i >= startIdx - 1 ; i--) {
    if (i >= endIdx) {
      push(remainingValues, array[i]);
    } else {
      pop(array);
    }
  }

  for (var i = 0; i < remainingValues.length; i++) {
    push(array, remainingValues[i]);
  }

  return result;
}

function concat(firstArray, secondArray) {
  var result = [];

  for (var i = 0; i < firstArray.length; i++) {
    push(result, firstArray[i]);
  }

  for (var i = 0; i < secondArray.length; i++) {
    push(result, secondArray[i]);
  }

  return result;
}

function join(array, string) {
  var result = "";

  for (var i = 0; i < array.length; i++) {
    result += array[i].toString();
    if (i !== array.length - 1) {
      result += string;
    }
  }
  console.log(result);
  return result;
}
