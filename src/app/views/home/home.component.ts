import {Component, OnInit, ViewChild, TemplateRef, OnDestroy, AfterContentInit} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import 'animate.css/animate.min.css';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy, AfterContentInit {

    @ViewChild('divulgue') private divulgueDialog: TemplateRef<any>;
    @ViewChild('fomente') private fomenteDialog: TemplateRef<any>;
    @ViewChild('desenvolva') private desenvolvaDialog: TemplateRef<any>;

    constructor(private api: ApiService, private modalService: NgbModal) {}

    showModalDivulgue() {
        this.modalService.open(this.divulgueDialog).result.then((result) => {
            // closed button pressed
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            // escape button pressed
            console.log(`Modal Dismissed`);
        });
    }

    showModalFomente() {
        this.modalService.open(this.fomenteDialog).result.then((result) => {
            // closed button pressed
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            // escape button pressed
            console.log(`Modal Dismissed`);
        });
    }

    showModalDesenvolva() {
        this.modalService.open(this.desenvolvaDialog).result.then((result) => {
            // closed button pressed
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            // escape button pressed
            console.log(`Modal Dismissed`);
        });
    }

    ngOnInit() { }

    ngAfterContentInit() { }

    ngOnDestroy() { }
}
