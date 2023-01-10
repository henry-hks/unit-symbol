'use strict';

const emitting = require("../../functions/emitter/emitter.js").emitting;

module.exports = function volume(input) {
    let result = {input: input, unit: null, symbol: null};

    switch (input)
    {
        // volume
        case 'm3':
        case 'm³':
        case 'cubicmeter':  result.symbol = 'm³';       result.unit = 'Cubic Meter';    break;

        case 'ft3':
        case 'ft³':
        case 'cuft':
        case 'cubicfoot':   result.symbol = 'ft³';      result.unit = 'Cubic Foot';    break;

        case 'l': 
        case 'litre':
        case 'liter':       result.symbol = 'L';        result.unit = 'Litre'; break;

        case 'gal':
        case 'gallon':      result.symbol = 'gal';      result.unit = 'Gallon'; break;

        case 'floz':
        case 'fl.oz.':
        case 'oz.fl.':
        case 'fluidounce':  result.symbol = 'fl oz';    result.unit = 'Fluid Ounce'; break;

        case 'oz':
        case 'ounce':
        case 'ounces':      result.symbol = 'oz';       result.unit = 'Ounce'; break;

        // mass
        case 'g':           
        case 'gram':
        case 'grams':       result.symbol = 'g';        result.unit = 'Gram'; break;

        case 'kg':          
        case 'kilogram':
        case 'kilograms':   result.symbol = 'kg';       result.unit = 'Kilogram'; break;

        case 't':
        case 'ton':
        case 'tons':
        case 'tonne':
        case 'tonnes':      result.symbol = 't';        result.unit = 'Tonne'; break;

        case 'lb':
        case 'lbs':
        case 'pound':
        case 'pounds':      result.symbol = 'lb';       result.unit = 'Pound'; break;
    }
    
    emitting(result);
}