'use strict';

const si = require("../slaves/si/si.js");

// reference: https://en.wikipedia.org/wiki/SI_base_unit

module.exports = function si_unit(input) {
    return [
        si(input)
    ];
}