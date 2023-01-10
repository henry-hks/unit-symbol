'use strict';

const { emitter } = require("../functions/emitter/emitter.js");
const electrical = require("../workers/electrical/electrical");

// reference: https://www.electronics-tutorials.ws/dccircuits/dcp_3.html

module.exports = function electrical_unit(input) {

    // emitter.on('true', data => {
    //     return data;
    // });

    electrical(input);
}