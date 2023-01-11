'use strict';

const electrical = require("../slaves/electrical/electrical.js");

// reference: https://www.electronics-tutorials.ws/dccircuits/dcp_3.html

module.exports = function electrical_unit(input) {
    return [
        electrical(input)
    ];
}