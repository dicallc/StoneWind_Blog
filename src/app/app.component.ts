import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  card_list:string[] =['1', '2', '3','4','5','6','7'];
  title = 'app';
}
