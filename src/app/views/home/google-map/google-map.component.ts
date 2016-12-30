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
        createMap('map', -14.18650192, -51.89766873);
    }

    ngOnDestroy() {

    }


}

// declaracao da funcao escrita em javascript
declare function createMap(id: any, lat: any, lng: any): void;
