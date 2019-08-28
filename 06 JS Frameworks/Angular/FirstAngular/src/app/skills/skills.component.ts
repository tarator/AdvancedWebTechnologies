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
		console.log('Selected skill', s);
	}
}
