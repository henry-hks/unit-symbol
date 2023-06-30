'use strict';

module.exports = function atmospheric_pressure(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // pressure
        case 'pa':
        case 'pascal':
        case 'pascals':             result.symbol = 'Pa';               result.unit = 'Pascals';                break;

        case 'mb':
        case 'millibar':
        case 'millibars':           result.symbol = 'mb';               result.unit = 'Millibars';              break;
        
        case 'hpa':
        case 'hectopascal':
        case 'hectopascals':        result.symbol = 'hPa';              result.unit = 'Hectopascals';           break;

        case 'mmhg':
        case 'millimeterofmercury': 
        case 'millimetersofmercury':result.symbol = 'mmHg';              result.unit = 'Millimeter Of Mercury'; break;

        case 'inhg':
        case 'inchofmercury':
        case 'inchesofmercury':     result.symbol = 'inHg';              result.unit = 'Inches Of Mercury';    break;
    }
    
    return result;
}