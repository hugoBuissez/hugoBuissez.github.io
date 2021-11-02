import {Component, ElementRef, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: []
})
export class HomeComponent implements OnInit {

    interval: number = 0;
    counter: number = 0;
    currentSpan: string = 'span0';

    ngOnInit(): void {
        this.interval = setInterval(() => this.changeSpanText(this.counter), 4500);
    }

    changeSpanText(counter: number): void {
        if (counter == 4) counter = 1;
        this.currentSpan = 'span' + counter;
        this.counter = (counter + 1);
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

}
