import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description:string = 'multiple components';
  name:string = 'Parsley';
  address:string = '739 Allen Ave';
  city:string = 'Springdale';
  state:string = 'OH';
  zip:string = '45246';
}
