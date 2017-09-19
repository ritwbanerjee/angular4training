import { Component }                    from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrls: String['./footer.css']
})

export class FooterComponent {
  constructor() {
    console.log('footer loaded');
  }
}