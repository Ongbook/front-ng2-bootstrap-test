import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const routes: Routes = [
    {path: '', component: CadastroComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
