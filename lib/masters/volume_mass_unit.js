'use strict';

const volume_mass = require('../slaves/volume_mass/volume_mass.js');

// reference: https://en.wikipedia.org/wiki/Mass

module.exports = function volume_unit(input) {
    return [
        volume_mass(input)
    ];
}