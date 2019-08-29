import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Skill } from '../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SkillsService {
	constructor(private httpClient: HttpClient) {
		this.httpClient.get<Skill[]>('/assets/skills.json').subscribe((data) => {
			this.arrSkills = data;
			this.skills$.next(this.arrSkills);
		});
	}

	private arrSkills: Skill[] = [];
	private skills$: BehaviorSubject<Skill[]> = new BehaviorSubject(this.arrSkills);

	getSkills(): Observable<Skill[]> {
		return this.skills$;
	}

	addSkill(item: Skill) {
		this.arrSkills.push(item);
		this.skills$.next(this.arrSkills);
	}

	deleteSkill(item: Skill) {
		this.arrSkills = this.arrSkills.filter((s) => s.id != item.id);
		this.skills$.next(this.arrSkills);
	}
}
