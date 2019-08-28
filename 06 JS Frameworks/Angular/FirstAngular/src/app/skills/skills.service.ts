import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './skills';

@Injectable({
	providedIn: 'root'
})
export class SkillsService {
	constructor(private httpClient: HttpClient) {}

	public getSkills(): Observable<Skill[]> {
		return this.httpClient.get<Skill[]>('/assets/skills.json');
	}
}
