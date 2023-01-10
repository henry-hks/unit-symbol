'use strict';

const emitting = require("../../functions/emitter/emitter.js").emitting;

module.exports = function relative_humidity(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // relative humidity
        case '%':
        case 'percent':
        case 'percentage':                      result.symbol = '%';            result.unit = 'Percent';                break;
    }
    
    emitting(result);
}