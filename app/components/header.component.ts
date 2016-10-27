import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'td-header',
  template: `
  <GridLayout rows="auto auto" columns="* auto" margin="0 0 24 0">
      <Label text="todos" class="header" colSpan="2"></Label>
      
      <TextField row="1"
          hint="What needs to be done?" 
          [(ngModel)]="text"></TextField>

      <Button row="1" col="1" text="+" (tap)="add()" class="add"></Button>
  </GridLayout>  
  `
})
export class HeaderComponent {
  text: string;
  @Output() addToDo = new EventEmitter<string>();

  add() {
    if (this.text) {
      this.addToDo.next(this.text);
      this.text = "";
    }
  }
}