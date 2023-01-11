'use strict';

module.exports = function relative_humidity(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // relative humidity
        case '%':
        case 'percent':
        case 'percentage':                      result.symbol = '%';            result.unit = 'Percent';                break;
    }
    
    return result;
}