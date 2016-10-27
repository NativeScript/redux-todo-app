import { Component } from "@angular/core";
import { NgRedux, select } from "ng2-redux";
import { configureStore } from "./store/configure-store";
import { Observable } from "rxjs";
import { ToDo, IAppState } from "./models";
import { addTodo, deleteTodo, toggleTodo } from "./actions/todos";
@Component({
  selector: "my-app",
  template: `
  <StackLayout>
    
    <td-header (addToDo)="addToDo($event)"></td-header>

    <td-todo-list 
      [todos]="todos$ | async" 
      (toggleToDo)="toggleToDo($event)"
      (deleteToDo)="deleteToDo($event)"></td-todo-list>

  </StackLayout>`,
})
export class AppComponent {
  @select() todos$: Observable<ToDo[]>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addToDo(todoText: string) {
    this.ngRedux.dispatch(addTodo(todoText));
  }

  toggleToDo(id: number) {
    this.ngRedux.dispatch(toggleTodo(id));
  }

  deleteToDo(id: number) {
    this.ngRedux.dispatch(deleteTodo(id));
  }
}
