//src="http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={2a5b5ec093cfb3f64b9b4198e9a6f39c}"

//sets current date
let date = moment().format("(MM/DD/YYYY)");
let displayDate = document.getElementsByClassName("current-date");
$(".current-date").text(date);

//sets 5 day forecast dates
let tomorrowRough = moment(date, "MM/DD").add(1, "days");
let tomorrow = tomorrowRough.format("MM/DD")
$("#tomorrow").text(tomorrow)

let tomorrowRoughPls1 = moment(date, "MM/DD").add(2, "days");
let tomorrowPls1 = tomorrowRoughPls1.format("MM/DD")
$("#tomorrow-plus-1").text(tomorrowPls1)

let tomorrowRoughPls2 = moment(date, "MM/DD").add(3, "days");
let tomorrowPls2 = tomorrowRoughPls2.format("MM/DD")
$("#tomorrow-plus-2").text(tomorrowPls2)

let tomorrowRoughPls3 = moment(date, "MM/DD").add(4, "days");
let tomorrowPls3 = tomorrowRoughPls3.format("MM/DD")
$("#tomorrow-plus-3").text(tomorrowPls3)

let tomorrowRoughPls4 = moment(date, "MM/DD").add(5, "days");
let tomorrowPls4 = tomorrowRoughPls4.format("MM/DD")
$("#tomorrow-plus-4").text(tomorrowPls4)



