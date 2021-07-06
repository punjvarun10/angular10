import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Data sent from parent to child component
  @Input()
  inputDataToChild!: string;

  // Data sent from child to parent component
  @Output() outputDataForParent:EventEmitter<string> =  new EventEmitter();
  outputDataString = "Sending data from Header Component(child) to App Component(parent)";
  sendDataToParent() {
    this.outputDataForParent.emit(this.outputDataString);
  }

  agreed = false; 
  @Output() booleanInstance = new EventEmitter<boolean>();
  sendBooleanValues() {
    this.agreed = !this.agreed;
    this.booleanInstance.emit(this.agreed);
    
    console.log(this.agreed);
  }

  constructor() { }

  ngOnInit(): void {
  }

  
}
