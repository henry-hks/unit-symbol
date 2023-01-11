'use strict';

module.exports = function electrical(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // electrical
        case 'v':
        case 'volt':
        case 'volts':
        case 'voltage':         result.symbol = 'V';    result.unit = 'Volt';   break;

        // Ampere in si.js

        case 'Ω':
        case 'ohm':
        case 'resistance':   
        case 'inpedance':       result.symbol = 'Ω';    result.unit = 'Ohm';    break;

        case '℧':
        case 'siemen':
        case 'conductance':     result.symbol = '℧';    result.unit = 'Siemen'; break;

        case 'farad':            
        case 'capacitance':     result.symbol = 'C';    result.unit = 'Farad';  break;

        case 'q':
        case 'coulomb':
        case 'charge':          result.symbol = 'Q';    result.unit = 'Coulomb';break;

        case 'h':
        case 'henry':
        case 'inductance':      result.symbol = 'H';    result.unit = 'Henry';  break;

        case 'w':
        case 'watt':
        case 'watts':
        case 'power':           result.symbol = 'W';    result.unit = 'Watt';   break;

        case 'hz':
        case 'hertz':           result.symbol = 'Hz';   result.unit = 'Hertz';  break;

        case 'kwh':
        case 'kilowatthour':    result.symbol = 'kWh';  result.unit = 'Kilowatt Hour';                  break;

        case 'voltamperereactive':
        case 'var':             result.symbol = 'var';  result.unit = 'Volt-Ampere-Reactive';           break;

        case 'va':
        case 'voltampere':      result.symbol = 'VA';   result.unit = 'Volt-Ampere';                    break;

        case 'kvarh':           result.symbol = 'kvarh';result.unit = 'Kilo-Volt-Ampere-Reactive Hour'; break;

        case 'kvah':            result.symbol = 'kVAh'; result.unit = 'Kilo-Volt-Ampere Hour';          break;
    }
    
    return result;
}