import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
@Component({
    selector: 'google-map',
    templateUrl: 'google-map.component.html',
    styleUrls: ['google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit, OnDestroy, AfterContentInit {


    constructor() {

    }

    ngOnInit() {

    }

    ngAfterContentInit() {
        createMap('map', -22.9108558, -43.5884197);
    }

    ngOnDestroy() {

    }


}

//declaração da função escrita em javascript
declare function createMap(id: any, lat: any, lng: any): void;
