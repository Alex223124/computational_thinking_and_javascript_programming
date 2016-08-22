function missing(arr) {
  var result = [];
  var lowest = arr[0];
  var highest = arr[arr.length - 1];

  for (var i = lowest; i < highest; i++) {
    if (arr.includes(i)) {
      continue;
    }
    result.push(i);
  }
  
  return result;
}
