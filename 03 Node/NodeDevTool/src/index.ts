// ES module import
// create bundle with `webpack` (requires webpack-cli)
import { Util } from './util';
import { Car } from './car';
import { State } from './state';

console.log(`Manually init util`);

let util = new Util();
util.log();

console.log(`Init State`);

let state = new State();

function driveCar() {
	let porsche = new Car();
	porsche.drive();
}

driveCar();

// //export method to global namespace - otherwise is is not available for function call
// (<any>window).drive = driveCar;

// //export class to global namespace
// (<any>window).state = new State();
