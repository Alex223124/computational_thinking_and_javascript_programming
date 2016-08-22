function average(values) {
  return sum(values) / values.length;
}

function sum(values) {
  var total = 0
  for (var i = 0, len = values.length; i < len; i++) {
    total += values[i];
  }
  return total
}

console.log(sum([5, 7, 12, 6, 15]));
console.log(average([5, 7, 12, 6, 15]));

var temperatures = [102, 99, 94, 106, 101];

console.log("And the average temperature is..." + average(temperatures));
