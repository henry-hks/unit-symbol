'use strict';

const emitting = require("../../functions/emitter/emitter.js").emitting;

module.exports = function temperature(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // temperature
        case 'c':
        case 'celsius':
        case 'degreecelsius':                   result.symbol = '°C';           result.unit = 'Degree Celsius';         break;

        case 'f':
        case 'fahrenheit':
        case 'degreefahrenheit':                result.symbol = '°F';            result.unit = 'Degree Fahrenheit';     break;

        case 'k':
        case 'kelvin':                          result.symbol = 'K';            result.unit = 'Kelvin';                 break;
    }
    
    emitting(result);
}