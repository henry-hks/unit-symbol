'use strict';

const { emitter } = require("../functions/emitter/emitter.js");
const volume_mass = require('../workers/volume_mass/volume_mass.js');

// reference: https://en.wikipedia.org/wiki/Mass

module.exports = function volume_unit(input) {

    // emitter.on('true', data => {
    //     return data;
    // });

    volume_mass(input);
}