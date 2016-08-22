function reverse(string) {
  var array = [];

  string.split('').forEach(function(char) {
    return array.unshift(char);
  });
  return array.join('');
}

console.log(reverse('hello'));               // returns "olleh"
console.log(reverse('The quick brown fox')); // returns "xof nworb kciuq ehT"
