//src="http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={2a5b5ec093cfb3f64b9b4198e9a6f39c}"
//sets API key
var APIKey = "2a5b5ec093cfb3f64b9b4198e9a6f39c";
var city;
var lat;
var lon;
let currentCity = document.getElementsByClassName("current-city");
let kelvin;
let fahrenheit;
let currentTemp = document.getElementsByClassName("current-temp");
let currentWind = document.getElementsByClassName("current-wind");
let currentHumidity = document.getElementsByClassName("current-humidity");


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

//get user-inputted city name

$(".search-btn").click(function (event) {
    //event.preventDefault();
    city  = $(this).siblings(".search-bar").val();
    console.log(city)
    localStorage.setItem("City", JSON.stringify(city));
    var latLonURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;
    fetch(latLonURL)
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    console.log(data[0].lat);
    console.log(data[0].lon);
    lat = (data[0].lat);
    lon = (data[0].lon);
    console.log(data[0].name)
    $(currentCity).text(data[0].name)
    var currentCond = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
    fetch(currentCond)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    console.log(data.list[0].main.temp)
    kelvin = (data.list[0].main.temp)
    fahrenheit = Math.round((kelvin - 273.15) * 1.8 + 32);
    $(currentTemp).text("Temp: " + fahrenheit +"°F");
    console.log(data.list[0].wind.speed)
    console.log(data.list[0].main.humidity)
    $(currentWind).text("Wind: " + (data.list[0].wind.speed) + " MPH");
    $(currentHumidity).text("Humidity: " + (data.list[0].main.humidity) + "%");

    //currentCity.innerText = data[0].name;
    })
   // getWeather();
    
});
});

/*function getWeather(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=" + APIKey)
    .then(function (response) {
    return response.json() 
})
    .then(function (data) {
    console.log(data)
    })
}
//get latitude and longitude
var requestOptions = {
    method: 'GET',
};*/





