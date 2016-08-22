var apples = 3;
var bananas = 1;
var are_equal = (apples === bananas);
var either_or = (bananas || apples);

if (are_equal) {
  console.log('strictly equal!');
}
else {
  if (apples == bananas) {
    console.log('same value but different types');
  }
  else {
    console.log('NOT strictly equal');
  }
}

console.log(either_or);

var last_name = "Arnold";
var family_message = last_name === "Arnold" ? "You're part of the family!" : "You're not family.";

console.log(family_message)
