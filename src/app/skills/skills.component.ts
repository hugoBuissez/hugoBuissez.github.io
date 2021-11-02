import {Component, OnInit} from '@angular/core';
import {SkillCategory, Skills} from "../Skills";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    skills?: SkillCategory[];


    constructor() {
    }

    ngOnInit(): void {
        this.skills = Skills;
    }

}
