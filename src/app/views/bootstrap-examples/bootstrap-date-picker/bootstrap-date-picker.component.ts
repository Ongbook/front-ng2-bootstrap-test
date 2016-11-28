import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'bootstrap-date-picker',
    templateUrl: 'bootstrap-date-picker.component.html',
    styleUrls: ['bootstrap-date-picker.component.scss'],
})
export class BootstrapDatePickerComponent implements OnInit, OnDestroy {
    model: NgbDateStruct;
    date: {year: number, month: number};

    selectToday() {
        let now = new Date();
        this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    }

    public constructor() {

    }

    ngOnInit() {
    }


    ngOnDestroy() {
    }
}
