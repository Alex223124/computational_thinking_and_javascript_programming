function gcd(num1, num2) {
  if (num1 > num2) {
    var larger = num1;
    var smaller = num2;
  } else {
    var larger = num2;
    var smaller = num1;
  }

  for (var i = smaller; i >= 1; i--) {
    if (larger % i === 0) {
      console.log(i);
      break;
    }
  }
}
