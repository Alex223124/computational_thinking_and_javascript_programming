function greetings(name, status) {
  var nameGreet = "Hello, " + name.join(" ") + "! ";
  var statusGreet = "Nice to have a " + status.title + " " + status.occupation + " around.";
  console.log(nameGreet + statusGreet);
}

// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
