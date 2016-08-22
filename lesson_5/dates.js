var today = new Date();
var tomorrow = new Date(today);
var nextWeek = new Date(today);

function dateSuffix(date) {
  var suffix = "th";
  var digit;

  date = date.toString();

  if (date.length === 1) {
    digit = date;
  } else if (date[0] !== "1") {
    digit = date[1];
  } else {
    digit = "";
  }

  if (digit === "1") suffix = "st";
  if (digit === "2") suffix = "nd";
  if (digit === "3") suffix = "rd";

  return date + suffix;
}

function formattedMonth(date) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[date.getMonth()];
}

function formattedDay(date) {
  daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  var weekDay = formattedDay(date);
  var month = formattedMonth(date);
  var day = dateSuffix(date.getDate());

  return "Today's date is " + weekDay + ", " + month + " " + day + ".";
}

function formattedYear(date) {
  return date.getYear() + 1900;
}

function formatTime(date) {
  var hours = date.getHours().toString();
  var minutes = date.getMinutes().toString();

  function padZero(string) {
    if (string.length === 1) {
      return "0" + string;
    } else {
      return string;
    }
  }

  return padZero(hours) + ":" + padZero(minutes);
}

// console.log(formattedDate(today));
// console.log(formattedYear(today));    // Equivalent to built-in function getFullYear below
// console.log(today.getFullYear());
// console.log(today.getTime());         // Time in total milliseconds since Jan. 1st 1970
//
// tomorrow.setDate(today.getDate() + 1);
// console.log(formattedDate(tomorrow));
//
// console.log(today === nextWeek);
// console.log(today.toDateString() === nextWeek.toDateString());
// nextWeek.setDate(today.getDate() + 7);
// console.log(today.toDateString() === nextWeek.toDateString());
//
// console.log(formatTime(today));
