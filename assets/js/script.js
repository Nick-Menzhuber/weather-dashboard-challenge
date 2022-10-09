//sets API key
var APIKey = "2a5b5ec093cfb3f64b9b4198e9a6f39c";
//sets variables for current conditions
var city;
var lat;
var lon;
var iconCode;
let currentIcon = document.getElementsByClassName("icon");
let currentCity = document.getElementsByClassName("current-city");
let kelvin;
let fahrenheit;
let currentTemp = document.getElementsByClassName("current-temp");
let currentWind = document.getElementsByClassName("current-wind");
let currentHumidity = document.getElementsByClassName("current-humidity");

//5 day forecast variables
let tomorrowKelvin;
let tomorrowFahrenheit;
let tomorrowTemp = document.getElementsByClassName("tomorrow-temp");
let tomorrowWind = document.getElementsByClassName("tomorrow-wind");
let tomorrowHumidity = document.getElementsByClassName("tomorrow-humidity");
let tomorrowIcon = document.getElementsByClassName("tomorrow-icon");

let tmrwPls1Kelvin;
let tmrwPls1Fahrenheit;
let tmrwPls1Temp = document.getElementsByClassName("tmrw-pls-1-temp");
let tmrwPls1Wind = document.getElementsByClassName("tmrw-pls-1-wind");
let tmrwPls1Humidity = document.getElementsByClassName("tmrw-pls-1-humidity");
let tmrwPls1Icon = document.getElementsByClassName("tmrw-pls-1-icon");

let tmrwPls2Kelvin;
let tmrwPls2Fahrenheit;
let tmrwPls2Temp = document.getElementsByClassName("tmrw-pls-2-temp");
let tmrwPls2Wind = document.getElementsByClassName("tmrw-pls-2-wind");
let tmrwPls2Humidity = document.getElementsByClassName("tmrw-pls-2-humidity");
let tmrwPls2Icon = document.getElementsByClassName("tmrw-pls-2-icon");

let tmrwPls3Kelvin;
let tmrwPls3Fahrenheit;
let tmrwPls3Temp = document.getElementsByClassName("tmrw-pls-3-temp");
let tmrwPls3Wind = document.getElementsByClassName("tmrw-pls-3-wind");
let tmrwPls3Humidity = document.getElementsByClassName("tmrw-pls-3-humidity");
let tmrwPls3Icon = document.getElementsByClassName("tmrw-pls-3-icon");

let tmrwPls4Kelvin;
let tmrwPls4Fahrenheit;
let tmrwPls4Temp = document.getElementsByClassName("tmrw-pls-4-temp");
let tmrwPls4Wind = document.getElementsByClassName("tmrw-pls-4-wind");
let tmrwPls4Humidity = document.getElementsByClassName("tmrw-pls-4-humidity");
let tmrwPls4Icon = document.getElementsByClassName("tmrw-pls-4-icon");

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

//equates search bar enter key with click event
$(".search-bar").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".search-btn").click();
    }
});

//sets functionality for search button and api calls

$(".search-btn").click(function () {
    city  = $(this).siblings(".search-bar").val();
    localStorage.setItem("City", JSON.stringify(city));
    var latLonURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;
    fetch(latLonURL)
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
        console.log(data);
    lat = (data[0].lat);
    lon = (data[0].lon);
    $(currentCity).text(data[0].name)
    var currentCond = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
    fetch(currentCond)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    console.log(data.list[0].weather[0].icon);
    $(currentIcon).attr("src", "https://openweathermap.org/img/wn/" + (data.list[0].weather[0].icon) + "@2x.png")
    kelvin = (data.list[0].main.temp)
    fahrenheit = Math.round((kelvin - 273.15) * 1.8 + 32);
    $(currentTemp).text("Temp: " + fahrenheit +"°F");
    $(currentWind).text("Wind: " + (data.list[0].wind.speed) + " MPH");
    $(currentHumidity).text("Humidity: " + (data.list[0].main.humidity) + "%");
    $(".current-location").show();
    //populates 5 day forecast cards
    $(tomorrowIcon).attr("src", "https://openweathermap.org/img/wn/" + (data.list[1].weather[0].icon) + "@2x.png")
    tomorrowKelvin = (data.list[1].main.temp)
    tomorrowFahrenheit = Math.round((tomorrowKelvin -273.15) * 1.8 + 32);
    $(tomorrowTemp).text("Temp: " + tomorrowFahrenheit + "°F");
    $(tomorrowWind).text("Wind: " + (data.list[1].wind.speed) + " MPH");
    $(tomorrowHumidity).text("Humidity: " + (data.list[1].main.humidity) + "%");

    $(tmrwPls1Icon).attr("src", "https://openweathermap.org/img/wn/" + (data.list[2].weather[0].icon) + "@2x.png")
    tmrwPls1Kelvin = (data.list[2].main.temp)
    tmrwPls1Fahrenheit = Math.round((tmrwPls1Kelvin -273.15) * 1.8 + 32);
    $(tmrwPls1Temp).text("Temp: " + tmrwPls1Fahrenheit + "°F");
    $(tmrwPls1Wind).text("Wind: " + (data.list[2].wind.speed) + " MPH");
    $(tmrwPls1Humidity).text("Humidity: " + (data.list[2].main.humidity) + "%");

    $(tmrwPls2Icon).attr("src", "https://openweathermap.org/img/wn/" + (data.list[3].weather[0].icon) + "@2x.png")
    tmrwPls2Kelvin = (data.list[3].main.temp)
    tmrwPls2Fahrenheit = Math.round((tmrwPls2Kelvin -273.15) * 1.8 + 32);
    $(tmrwPls2Temp).text("Temp: " + tmrwPls2Fahrenheit + "°F");
    $(tmrwPls2Wind).text("Wind: " + (data.list[3].wind.speed) + " MPH");
    $(tmrwPls2Humidity).text("Humidity: " + (data.list[3].main.humidity) + "%");

    $(tmrwPls3Icon).attr("src", "https://openweathermap.org/img/wn/" + (data.list[4].weather[0].icon) + "@2x.png")
    tmrwPls3Kelvin = (data.list[4].main.temp)
    tmrwPls3Fahrenheit = Math.round((tmrwPls3Kelvin -273.15) * 1.8 + 32);
    $(tmrwPls3Temp).text("Temp: " + tmrwPls3Fahrenheit + "°F");
    $(tmrwPls3Wind).text("Wind: " + (data.list[4].wind.speed) + " MPH");
    $(tmrwPls3Humidity).text("Humidity: " + (data.list[4].main.humidity) + "%");

    $(tmrwPls4Icon).attr("src", "https://openweathermap.org/img/wn/" + (data.list[5].weather[0].icon) + "@2x.png")
    tmrwPls4Kelvin = (data.list[5].main.temp)
    tmrwPls4Fahrenheit = Math.round((tmrwPls4Kelvin -273.15) * 1.8 + 32);
    $(tmrwPls4Temp).text("Temp: " + tmrwPls4Fahrenheit + "°F");
    $(tmrwPls4Wind).text("Wind: " + (data.list[5].wind.speed) + " MPH");
    $(tmrwPls4Humidity).text("Humidity: " + (data.list[5].main.humidity) + "%");
    $(".card").show();
  
    })
    
});
});