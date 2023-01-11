'use strict';

module.exports = function wind(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // wind speed
        case 'm/s':
        case 'meterpersecond':
        case 'meterspersecond':     result.symbol = 'm/s';              result.unit = 'Meters Per Second';      break;

        case 'mph':
        case 'mileperhour':
        case 'milesperhour':        result.symbol = 'mph';              result.unit = 'Miles Per Hour';         break;

        case 'kph':
        case 'kilometerperhour':
        case 'kilometersperhour':   result.symbol = 'kph';              result.unit = 'Kilometers Per Hour';    break;

        case 'knt':
        case 'knot':                result.symbol = 'kn';               result.unit = 'Knot';                   break;

        case 'beaufort':            
        case 'beaufortscale':       result.symbol = 'beaufort';         result.unit = 'Beaufort';               break;
    }
    
    return result;
}