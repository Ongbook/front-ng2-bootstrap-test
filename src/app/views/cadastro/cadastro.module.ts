import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './cadastro.routing';
import { CadastroComponent } from './cadastro.component';

@NgModule({
  imports: [ CommonModule, routing ],

  providers: [],

  declarations: [CadastroComponent],

  exports: []
})

export class CadastroModule {

}
