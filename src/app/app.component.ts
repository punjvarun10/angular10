import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTen';
  
  //Toggle Class
  active = false;
  toggleClass() {
    if (this.active) {
      return 'active';
    } else {
      return '';
    }
  }

  // Data sent from parent to child component
  inputValueForChild = "Sending data from App Component(parent) to Header Component(child)";

  // Data sent from child to parent component
  str = "";
  getdata(value: any) {
    this.str = value
  }
    
  //getting boolean result from child component
  result: boolean = false;
  getBooleanValues(agreed: boolean) { 
    this.result = agreed;
    console.log("hi", this.result);
  }

}
