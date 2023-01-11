'use strict';

module.exports = function si(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // time
        case 's':
        case 'sec':
        case 'second':
        case 'seconds':         result.symbol = 's';    result.unit = 'Second';     break;

        // length
        case 'm':          
        case 'meter':
        case 'meters':          result.symbol = 'm';    result.unit = 'Meter';      break;

        // mass
        case 'kg':          
        case 'kilogram':
        case 'kilograms':       result.symbol = 'kg';   result.unit = 'Kilogram';   break;

        // electric current
        case 'a':
        case 'amp':
        case 'amps':
        case 'ampere':          result.symbol = 'A';    result.unit = 'Ampere';     break;

        // temperature
        case 'k':
        case 'kelvin':          result.symbol = 'K';    result.unit = 'Kelvin';     break;

        // amount of substance
        case 'mol':
        case 'mole':
        case 'moles':           result.symbol = 'mol';    result.unit = 'Mole';     break;

        // luminous intensity
        case 'cd':
        case 'candela':         result.symbol = 'cd';    result.unit = 'Candela';   break;

    }
    
    return result;
}