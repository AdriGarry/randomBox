'use strict';

class randomBox {
	constructor(arg) {
		if (!Array.isArray(arg)) {
			console.error('NOT ARRAY, Odi.error...', arg);
			return;
		}
		this.archive = arg.slice(0);
		this.cycle = this.randomize(arg);
		this.next = this.next;
		// console.log('Box:', this);
	}

	next() {
		let nextItem = this.cycle.shift();
		if (!this.cycle.length) {
			this.reload(nextItem);
		}
		// console.log('next',Box.cycle);
		return nextItem;
	}

	randomize(array) {
		// console.log('randomBox.randomize', array);
		let arr = array.slice(0).sort(function() {
			return 0.5 - Math.random();
		});
		// console.log('randomBox.randomize', array, '=>', arr);
		return arr;
	}
	reload(lastItem) {
		//do{
		//	Box.cycle = randomize(Box.archive);
		//}while(Box.cycle[0] == Box.archive[0]);
		this.cycle = this.randomize(this.archive);
		if (this.cycle[0] == lastItem) {
			// console.log('-----> SAME. lastItem:', lastItem);
			this.reload(lastItem);
			return;
		}
		// console.log('randomBox.reload', this.cycle);
	}
}
exports.randomBox = randomBox;
