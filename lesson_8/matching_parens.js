function isBalanced(text) {
  var parenCount = 0;

  for (var i = 0; i < text.length; i++) {
    if (text[i] === '(') {
      parenCount++;
    } else if (text[i] === ')') {
      parenCount--;
    }

    if (parenCount < 0) { return false; }
  }

  return parenCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
