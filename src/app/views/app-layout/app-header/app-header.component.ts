import {Component, OnInit, ViewChild, TemplateRef, OnDestroy} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AngularFire, AuthProviders, AuthMethods, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';
import {User} from './user.interface.ts';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {

    @ViewChild('register') private registerDialog: TemplateRef<any>;

    public authState: FirebaseAuthState;
    public user: User;

    constructor(public af: AngularFire, private modalService: NgbModal) {
        this.af.auth.subscribe(auth => {
            console.log(auth);
            this.authState = auth;
        });
    }


    login() {
        this.af.auth.login({
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

    fblogin() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        });
    }

    printuserinfo() {
        
        var user = this.af.auth.getAuth().facebook; 

        if (user != null) {
            console.log(user);
        }

    }

    logout() {
        this.af.auth.logout();
    }

    showregister() {
        this.modalService.open(this.registerDialog).result.then((result) => {
            //closed button pressed
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            //escape button pressed
            console.log(`Modal Dismissed`);
        });
    }

    cadastrar(model: User, isValid: boolean) {
        // call API to save customer
        console.log(model, isValid);
    }

    ngOnInit() {
        this.user = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    ngOnDestroy() {

    }
}
