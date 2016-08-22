function myReduce(array, func, initial) {
  var value, index;

  if (initial) {
    value = initial;
    index = 0;
  } else {
    value = array[0];
    index = 1;
  }

  array.slice(index).forEach(function(element) {
    value = func(value, element);
  });

  console.log(value);
  return value;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

myReduce([5, 12, 15, 1, 6], smallest);
