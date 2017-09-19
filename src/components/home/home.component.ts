import { Component }        from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})

export class HomeComponent {
  constructor() {
    console.log('home comp loaded');
  }

  ngOnInit() {
    console.log('home loaded');
  }
}
