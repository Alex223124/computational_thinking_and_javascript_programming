function passWordProtect() {
  var password = "password",
      attempts = 1,
      guess = prompt("What is the password:");

  console.log("attempts: " + attempts + "/3");
  
  while (attempts < 4) {
    if (guess === password) {
      console.log("You have successfully logged in.");
      break;
    }
    else if (guess !== password && attempts < 3) {
      guess = prompt("What is the password:");
      attempts++;
      console.log("attempts: " + attempts + "/3");
    }
    else {
      console.log("You have been denied access.");
      break;
    }
  }
}
