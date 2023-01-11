'use strict';

const si_unit = require('./masters/si_unit.js');
const electrical_unit = require('./masters/electrical_unit.js');
const volume_unit = require('./masters/volume_mass_unit.js');
const weather_unit = require('./masters/weather_unit.js');

module.exports = function unit_symbol(input) {
    if (check_null(input)) {
        return {input: input, unit: 'N/A', symbol: 'N/A'};
    }

    const input_clean = input.toLowerCase().replace(/[\s_-]/g, ''); // lowercase, remove spaces, underscores, hyphen

    return find_result(input, [...si_unit(input_clean), ...electrical_unit(input_clean), ...volume_unit(input_clean), ...weather_unit(input_clean)]);
    
}

function find_result(input, array_of_results) {
    const result = array_of_results.filter(x=> x.unit !== null && x.symbol !== null);

    if (result.length) {
        result[0].input = input;
        return result[0];
    } else {
        return {input: input, unit: 'N/A', symbol: 'N/A'}
    }

}

function check_null(input) {
    return input === null || input === undefined? true : false;
}