function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(n) {
  var results = [];

  if (n < 4 || n % 2 === 1) {
    console.log(null);
  }

  for (var i = 2; i < n; i++) {
    if (isPrime(i) && isPrime(n - i) && !results.includes(n - i)) {
      console.log(i + " " + (n - i));
      results.push(i);
      results.push(n - i);
    }
  }
}
