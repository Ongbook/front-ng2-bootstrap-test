import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy, AfterContentInit {

    constructor(private api:ApiService) {

    }

    public mapMarkers: Array<any> = [
        {}
    ]; 

    ngOnInit() {
        
    }

    ngAfterContentInit() {
        
    }

    ngOnDestroy() {

    }

    
}




