function arraysEqual(firstArray, secondArray) {
  if (firstArray.size !== secondArray.size) {
    return false;
  }

  for (var i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
}
