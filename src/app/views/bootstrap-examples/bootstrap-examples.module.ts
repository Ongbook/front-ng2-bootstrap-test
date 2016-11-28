import {NgModule} from'@angular/core';
import {CommonModule}  from '@angular/common';
import {routing} from './bootstrap-examples.routing';
import {BootstrapExamplesComponent} from './bootstrap-examples.component';
import {BootstrapAlertComponent} from './bootstrap-alert/bootstrap-alert.component';
import {BootstrapDatePickerComponent} from './bootstrap-date-picker/bootstrap-date-picker.component';
import {BootstrapDropdownComponent} from './bootstrap-dropdown/bootstrap-dropdown.component';
import {BootstrapTabsComponent} from './bootstrap-tabs/bootstrap-tabs.component';
import {NgbAlertModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbTabsetModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {BootstrapModalComponent} from './bootstrap-modal/bootstrap-modal.component';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        NgbAlertModule,
        NgbDatepickerModule,
        NgbDropdownModule,
        NgbModalModule,
        NgbTabsetModule,
        NgbTypeaheadModule
    ],
    providers: [],
    declarations: [
        BootstrapExamplesComponent,
        BootstrapAlertComponent,
        BootstrapDatePickerComponent,
        BootstrapDropdownComponent,
        BootstrapTabsComponent,
        BootstrapModalComponent
    ],
    exports: []
})
export class BootstrapExamplesModule {

}

