import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  style = 'cards';

  onStyleChange() {
    this.style = this.style === 'cards' ? 'lines' : 'cards';
  }

}
