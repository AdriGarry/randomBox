'use strict';

const randomBox = require('./randomBox.js').randomBox;
// console.log(randomBox);

const EXAMPLE_ARRAY = ['A', 'B', 'C', 'D'];

var badRandomBoxExample = new randomBox(null);
var randomBoxExample = new randomBox(EXAMPLE_ARRAY);

for (var i = 0; i < 25; i++) {
	console.log(i, randomBoxExample.next());
}
