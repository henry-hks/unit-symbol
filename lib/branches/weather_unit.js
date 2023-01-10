'use strict';

const { emitter } = require("../functions/emitter/emitter.js");
const atmospheric_pressure = require("../workers/weather/atmospheric_pressure.js");
const precipitation = require("../workers/weather/precipitation.js");
const relative_humidity = require("../workers/weather/relative_humidity.js");
const temperature = require("../workers/weather/temperature.js");
const wind = require("../workers/weather/wind.js");

// reference: https://windy.app/blog/weather-units-of-measurement.html#:~:text=They%20are%20measured%20in%20degrees,according%20to%20the%20International%20SI.
// only up to relative humidity

module.exports = function weather_unit(input) {
    // emitter.on('true', data => {
    //     return data;
    // });

    atmospheric_pressure(input);
    precipitation(input);
    relative_humidity(input);
    temperature(input);
    wind(input);

}