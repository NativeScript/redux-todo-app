import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from "../models";
@Component({
  selector: 'td-todo-list',
  template: `
  <ScrollView [row]="row">
    <StackLayout>
        <td-todo *ngFor="let todo of todos" 
          [todo]="todo" 
          (toggle)="toggleToDo.next(todo.id)"
          (delete)="deleteToDo.next(todo.id)">
        </td-todo>
    </StackLayout>
  </ScrollView>
  `
})
export class ToDoListComponent {
  @Input() row: number = 0;
  @Input() todos: Array<ToDo>;
  @Output() toggleToDo: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteToDo: EventEmitter<number> = new EventEmitter<number>();
}