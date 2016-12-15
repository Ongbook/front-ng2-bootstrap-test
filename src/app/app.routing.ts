import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './views/home/home.module#HomeModule'},
  {path: 'cadastro', loadChildren: './views/cadastro/cadastro.module#CadastroModule'},
  {path: 'bootstrap-examples', loadChildren: './views/bootstrap-examples/bootstrap-examples.module#BootstrapExamplesModule'},
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(routes);
