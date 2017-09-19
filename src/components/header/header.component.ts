import { Component }                    from '@angular/core';
import { Router, ActivatedRoute }                       from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.html'
})

export class HeaderComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((response: any) => {
      console.log('response: ', response);
    });
  }

  navigateTo(item: any) {
    this.router.navigate([item]);
  }

}
