import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import 'animate.css/animate.min.css';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy, AfterContentInit {

    constructor(private api: ApiService) {}

    ngOnInit() { }

    ngAfterContentInit() { }

    ngOnDestroy() { }
}
