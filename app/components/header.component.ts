import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'td-header',
  template: `
  <GridLayout rows="auto auto" columns="* auto">
      <Label text="todos" class="header" colSpan="2"></Label>
      
      <TextField row="1"
          hint="What needs to be done?" 
          [(ngModel)]="text"></TextField>
      <Button  row="1" col="1" text="add" (tap)="add()"></Button>
          
  </GridLayout>  
  `
})
export class HeaderComponent {
  text: string;
  @Output() addToDo = new EventEmitter<string>();

  add() {
    this.addToDo.next(this.text);
    this.text = "";
  }
}