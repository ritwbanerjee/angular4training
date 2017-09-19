import { NgModule }            from '@angular/core';

// Import all the shared components here
import { HeaderComponent }     from '../../components/header/header.component';
import { FooterComponent }     from '../../components/footer/footer.component';

@NgModule({
  imports: [
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule{

}