function gradeReadOut(num) {
  var input,
      letterGrade,
      scoreTotal = 0,
      average;

  for (var i = 0; i < num; i++) {
    input = prompt("Enter score " + (i + 1) + ":");
    scoreTotal += Number(input);
  }

  average = scoreTotal / num;
  console.log(average);

  if (average >= 90) { letterGrade = "A"; }
  else if (average >= 70 && average < 90) { letterGrade = "B"; }
  else if (average >= 50 && average < 70) { letterGrade = "C"; }
  else { letterGrade = "F"; }

  message = "Based on the average of your three scores your letter" +
            " grade is \"" + letterGrade + "\".";

  console.log(message);
}
