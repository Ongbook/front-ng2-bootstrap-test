import {removeNgStyles, createNewHosts} from '@angularclass/hmr';
import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {CoreModule} from './core/core.module';
import {AppLayoutModule} from './views/app-layout/app-layout.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: 'AIzaSyDS4-ddlFHcGEp66eO2gsjWS0CvL-3YyIU',
    authDomain: 'ongbook-9c3ec.firebaseapp.com',
    databaseURL: 'https://ongbook-9c3ec.firebaseio.com',
    storageBucket: 'ongbook-9c3ec.appspot.com',
    messagingSenderId: '496575609949'
};

const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};


@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule,
        AppLayoutModule,
        NgbModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    hmrOnInit(store) {
        console.log('HMR store', store);
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
