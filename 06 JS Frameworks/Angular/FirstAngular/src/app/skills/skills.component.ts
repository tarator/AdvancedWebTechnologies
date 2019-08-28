import { Component, OnInit } from '@angular/core';
import { Skill } from './skills';
import { SkillsService } from './skills.service';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: [ './skills.component.sass' ]
})
export class SkillsComponent implements OnInit {
	constructor(private skillService: SkillsService) {}

	skills: Skill[];
	public neuerSkillText: string = '';

	ngOnInit() {
		this.skillService.getSkills().subscribe({
			next: (data) => {
				this.skills = data;
				console.log('Skills loaded from JSON.', data);
			},
			error: (x) => {
				console.log(x);
			}
		});
	}

	skillSelected(s: Skill) {
		console.log('Removing skill', s);

		// ALTERNATIVE 1
		// this.skills = this.skills.filter(function(value) {
		// 	if (this === value) {
		// 		return false;
		// 	}
		// 	return true;
		// }, s);

		// ALTERNATIVE 2
		// this.skills = this.skills.filter((skill) => {
		// 	return skill != s;
		// });

		// ALTERNATIVE 3
		this.skills = this.skills.filter((skill) => skill != s);
	}

	addNewSkill(): void {
		console.log('Adding new skill', this.neuerSkillText);
		let skill: Skill = {
			id: 1000,
			name: this.neuerSkillText,
			hours: 10
		};

		if (this.skills.map((val) => val.name).filter((val) => val === this.neuerSkillText).length > 0) {
			console.log('Skill mit dieser Bezeichnung bereits vorhanden.', this.neuerSkillText);
			return;
		}

		this.skills.push(skill);
	}
}
