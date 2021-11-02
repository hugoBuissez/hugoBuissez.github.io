import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output()
    pageClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    faGit = faGithub;
    faLinkedin = faLinkedinIn;
    faMail = faEnvelope;

    ngOnInit(): void {
    }

    onPageClick(pageId: string) {
        this.pageClicked.emit(pageId);
    }

}
