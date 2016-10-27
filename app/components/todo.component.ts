import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ToDo} from "../models";
@Component({
  selector: 'td-todo',
  template: `
<GridLayout columns="auto * auto" rows="auto">
    <Button col="0" [text]="todo.completed ? 'done' : 'undo'" (tap)="toggle.next()"></Button>
    <Label col="1" [text]="todo.text" textWrap="true" 
      [class.completed]="todo.completed"
      [class.pending]="!todo.completed"></Label>
    <Button col="2" text="x" (tap)="delete.next()"></Button>
</GridLayout>
  `
})
export class ToDoComponent {
  @Input() todo: ToDo;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
}