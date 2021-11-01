import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    interval: number = 0;
    spanText = 'Front-end'
    spanTexts: string[] = ['Front-end', 'Back-end', 'Junior']

    constructor() {
    }

    changeSpanText(counter: number) {
        this.spanText = this.spanTexts[counter];
    }

    ngOnInit(): void {
        let counter = 0;
        this.interval = setInterval(() => this.changeSpanText(counter++ % 3), 3000);
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

}
