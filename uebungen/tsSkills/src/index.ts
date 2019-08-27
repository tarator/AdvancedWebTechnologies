import { Skill } from './models';
import { http, createTable, clickedRow } from './utils';
console.log('Hello world');

http<Skill[]>('skills.json').then((data: Skill[]) => {
	// data.forEach((sk: Skill) => {
	// 	console.log(sk.name);
	// });
	createTable('#skillsTable', data);
});

// Export a Function into the global namespace.
(<any>window).clickedyClick = clickedRow;
