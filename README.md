# unit-symbol
To provide the unit and unit symbol based on the keyword input. Many common units in different areas are covered, such as units of electrical, volume, mass, weather, and will keep updating for more.

### Installation
This is a **Node.js** module can be install via the **npm** registry.

```
$ npm i unit-symbol
```

### Quick Start
After the installation, include the package in your code. Below is the example to use the package.
```javascript
const unitSymbol = require('unit-symbol');

const your_input = 'Voltage';

const result = unitSymbol(your_input);

console.log('result: ', result);

// A object of three properties returned, including:
// input: user keyword input
// unit: the translated unit based on the input
// symbol: the corresponding unit symbol

// or you can use object destructuring to get the result
const {input, unit, symbol} = unitSymbol(your_input);

console.log(input, unit, symbol);
```

output:
```shell
result:  { input: 'Voltage', unit: 'Volt', symbol: 'V' }
Voltage Volt V
```

### Other Examples
The empty string, null, or undefined keyword input will result in '**N/A**' unit and symbol.
```javascript
const unitSymbol = require('unit-symbol');

const result_empty = unitSymbol('');
const result_null = unitSymbol(null);
const result_undefined = unitSymbol();

console.log('result_empty: ', result_empty);
console.log('result_null: ', result_null);
console.log('result_undefined: ', result_undefined);
```

output:
```shell
result_empty:  { input: '', unit: 'N/A', symbol: 'N/A' }
result_null:  { input: null, unit: 'N/A', symbol: 'N/A' }
result_undefined:  { input: undefined, unit: 'N/A', symbol: 'N/A' }
```