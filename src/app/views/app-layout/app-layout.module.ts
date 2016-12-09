import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {RouterModule} from '@angular/router';
import {AppLayoutComponent} from './app-layout.component';
import { FormsModule } from '@angular/forms';
import { EqualValidator} from './equal-validator.directive';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    declarations: [
        AppLayoutComponent,
        AppHeaderComponent,
        AppFooterComponent,
        EqualValidator
    ],
    exports: [
        AppLayoutComponent
    ]
})
export class AppLayoutModule {

}
