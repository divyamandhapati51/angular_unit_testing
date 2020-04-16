import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  greet(name) {
    return 'hello ' + name;
  }
  welcome() {
    return 'welcome to tericsoft';
  }
  getCurrencies() {
    return ['USD', 'INR', 'EUR'];
  }
}
