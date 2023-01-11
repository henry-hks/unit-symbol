'use strict';

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

        // kelvin in si.js
    }
    
    return result;
}