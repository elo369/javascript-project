document.addEventListener("DOMContentLoaded",function () {
    var locationInput = document.querySelector("#locationInput")
var getWeather = document.querySelector("#getWeatherBtn")
var temperature = document.querySelector("#temperature")
var description = document.querySelector("#description")
var location = document.querySelector("#location")


getWeather.addEventListener("click", function () {
    if (locationInput.value !== "") {
        var degree = Math.floor(Math.random() * 30 + 1) + "◦ degree"

        var wea = "cloudy weather"

        temperature.innerHTML = `temperature : ${degree}`
        description.innerHTML = `Weather :${wea}`
        location.innerHTML= `location : ${locationInput.value}`
    }
})
})


