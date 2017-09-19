import { NgModule }          from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule }      from '../shared/shared.module';

// Import Components
import { HomeComponent }     from '../../components/home/home.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})

export class HomeModule {
  constructor() {
    console.log('Home Module Loaded');
  }
}