import {Component, OnInit} from '@angular/core';
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    faGit = faGithub;
    faLinkedin = faLinkedinIn;
    faMail = faEnvelope;

    ngOnInit(): void {
    }

}
