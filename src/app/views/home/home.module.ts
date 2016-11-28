import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './home.routing';
import { GoogleMapComponent} from './google-map/google-map.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
      CommonModule,
  	  routing
  ],
  providers: [],
  declarations: [
      HomeComponent,
      GoogleMapComponent
  ],
  exports: []
})
export class HomeModule {
    
}
