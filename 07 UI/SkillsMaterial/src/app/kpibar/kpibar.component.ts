import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills/skills.service';

@Component({
	selector: 'app-kpibar',
	templateUrl: './kpibar.component.html',
	styleUrls: [ './kpibar.component.scss' ]
})
export class KpibarComponent implements OnInit {
	constructor(private service: SkillsService) {}

	sumHours: number = 0;

	ngOnInit() {
		this.service.getSkills().subscribe((data) => {
			console.log('sum', data);
			this.sumHours = data.reduce((prevSum, skill) => {
				return prevSum + skill.hours;
			}, 0);
		});
	}
}
