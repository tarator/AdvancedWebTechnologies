import { Skill } from './models';

export const http = <T>(request: RequestInfo): Promise<T> => {
	return new Promise((resolve) => {
		fetch(request).then((response) => response.json()).then((body) => {
			resolve(body);
		});
	});
};

export function createTable(divQuerySelector: string, skills?: Skill[]): void {
	let tbody = '';
	if (skills != null) {
		skills.forEach((sk: Skill) => {
			tbody += `
                <tr onclick="clickedyClick('${sk.name}')">
                    <td>${sk.name}</td>
                    <td>${sk.level}</td>
                </tr>
            `;
		});
	}
	let table = `<table><tr><th>Text</th></tr>${tbody}</table>`;
	document.querySelector(divQuerySelector).innerHTML = table;
}

export function clickedRow(name: string) {
	console.log(`Clicked ${name}`);
}
