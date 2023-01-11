'use strict';

const atmospheric_pressure = require("../slaves/weather/atmospheric_pressure.js");
const precipitation = require("../slaves/weather/precipitation.js");
const relative_humidity = require("../slaves/weather/relative_humidity.js");
const temperature = require("../slaves/weather/temperature.js");
const wind = require("../slaves/weather/wind.js");

// reference: https://windy.app/blog/weather-units-of-measurement.html#:~:text=They%20are%20measured%20in%20degrees,according%20to%20the%20International%20SI.
// only up to relative humidity

module.exports = function weather_unit(input) {
    return [
        atmospheric_pressure(input),
        precipitation(input),
        relative_humidity(input),
        temperature(input),
        wind(input)
    ];
}