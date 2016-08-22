var firstName = "William";
var lastName = "Arnold";
var fullName = firstName + " " + lastName;

console.log(fullName);
console.log(firstName.concat(" ", lastName));
console.log(fullName.split(" "));

var language = "JavaScript";
var idx = language.indexOf("S")

console.log(idx);

var charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

var lastIdx = language.lastIndexOf("a");
console.log(lastIdx);

var a = 'a';
var b = 'b';

console.log(a > b);
b = 'B'
console.log(a > b);

var aIndex = language.indexOf("a");
var vIndex = language.indexOf("v");
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

var fact1 = "JavaScript is fun";
var fact2 = "Kids like it too";
var compoundSentence = fact1 + " and " + fact2.toLowerCase();
console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);

var pi = 22 / 7;
pi = pi.toString();
console.log(pi.lastIndexOf("14"));

var boxNumber = 365..toString();
console.log(boxNumber);
boxNumber = (365).toString();
console.log(boxNumber);

console.log(typeof boxNumber);
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber += "";
console.log(typeof boxNumber);

function greeter() {
  var name = prompt("What is your name?");
  var message = "Hello " + name + ".";

  if (name.endsWith("!")) {
    message = (message.slice(0, message.length - 2) + ". Why are we screaming?").toUpperCase();
  }

  console.log(message);
}

greeter();
