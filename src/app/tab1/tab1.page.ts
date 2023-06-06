import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  user = {}

  // tiempo() {
  //   setTimeout(() => {this.toggleState;
  //   }, 2000); 
  // }
  toggleState = false;

}
