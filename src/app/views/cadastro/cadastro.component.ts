import {Component, OnInit, OnDestroy} from '@angular/core';
@Component({
    selector: 'cadastro-component',
    templateUrl: 'cadastro.component.html',
    styleUrls: ['cadastro.component.scss'],
})
export class CadastroComponent implements OnInit, OnDestroy {

    constructor() {

    }

    ngOnInit() {
      console.log('Hello From the About Page');
    }

    ngOnDestroy() {

    }
}
