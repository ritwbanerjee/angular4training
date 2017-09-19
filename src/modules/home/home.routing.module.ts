import { NgModule }        from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

// Import home component here
import { HomeComponent }               from '../../components/home/home.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: HomeComponent,
    data: {
      showNav: true
    }
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule {
  constructor() {
    console.log('router loaded');
  }
}
