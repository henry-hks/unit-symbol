'use strict';

const emitting = require("../../functions/emitter/emitter.js").emitting;

module.exports = function precipitation(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // precipitation
        case 'mm':
        case 'millimeter':
        case 'millimeters':                     result.symbol = 'mm';           result.unit = 'Millimeters';                break;

        case 'kg/sqm':
        case 'kg/m2':
        case 'kgperm2':
        case 'kilogrampersquaremeter':
        case 'kilogramspersquaremeter':         result.symbol = 'kg/sqm';       result.unit = 'Kilograms per Square Meter'; break;

        case 'in':
        case 'inch':                            result.symbol = 'in';           result.unit = 'inch';                       break;
    }
    
    emitting(result);
}