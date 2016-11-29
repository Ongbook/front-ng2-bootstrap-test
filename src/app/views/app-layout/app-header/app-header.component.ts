import {Component, OnInit, OnDestroy} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {

    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => console.log(auth));
    }


    login() {
        console.log('metódo de login chamado');
        this.af.auth.login({
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

    logout() {
        this.af.auth.logout();
    }


    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
