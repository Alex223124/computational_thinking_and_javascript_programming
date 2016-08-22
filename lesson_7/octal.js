function octalToDecimal(number) {
  var digitsArray = number.toString().split("").reverse();

  if (digitsArray.includes("8") || digitsArray.includes("9")) { return 0; }

  return digitsArray.map(function(string, index) {
    return (+string) * Math.pow(8, index);
  }).reduce(function(sum, digit) {
    return sum += digit
  });
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('17');          // 9
octalToDecimal('130');         // 88
console.log(octalToDecimal('2047'));        // 1063
octalToDecimal('8');           // 0
octalToDecimal('9');           // 0
octalToDecimal('6789');        // 0
octalToDecimal('011');         // 9
