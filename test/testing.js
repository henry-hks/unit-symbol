'use strict';

const unitSymbol = require('../index.js');

const result_empty = unitSymbol('');
const result_null = unitSymbol(null);
const result_undefined = unitSymbol();

console.log('result_empty: ', result_empty);
console.log('result_null: ', result_null);
console.log('result_undefined: ', result_undefined);