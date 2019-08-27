'use strict';

class RandomBox {
	constructor(arg) {
		if (!Array.isArray(arg)) {
			console.error('arg is NOT ARRAY...', arg);
			return;
		}
		this.archive = arg.slice(0);
		this.cycle = this._randomize(arg);
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

	_randomize(array) {
		// console.log('randomBox._randomize', array);
		let arr = array.slice(0).sort(function() {
			return 0.5 - Math.random();
		});
		// console.log('randomBox._randomize', array, '=>', arr);
		return arr;
	}
	reload(lastItem) {
		//do{
		//	Box.cycle = _randomize(Box.archive);
		//}while(Box.cycle[0] == Box.archive[0]);
		this.cycle = this._randomize(this.archive);
		if (this.cycle[0] == lastItem) {
			// console.log('-----> SAME. lastItem:', lastItem);
			this.reload(lastItem);
			return;
		}
		// console.log('randomBox.reload', this.cycle);
	}
}
exports.RandomBox = RandomBox;
