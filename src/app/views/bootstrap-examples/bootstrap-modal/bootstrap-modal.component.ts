import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'bootstrap-modal',
    templateUrl: 'bootstrap-modal.component.html',
    styleUrls: ['bootstrap-modal.component.scss'],
})
export class BootstrapModalComponent implements OnInit {

    @ViewChild('exampleModal') private exampleModal: TemplateRef<any>;

    constructor(private modalService: NgbModal) {

    }

    ngOnInit() {

    }

    openModal() {
        this.modalService.open(this.exampleModal).result.then((result) => {
            //closed button pressed
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            //escape button pressed
            console.log(`Modal Dismissed`);
        });
    }
}
