import { Component } from "@angular/core";
import { NgRedux, select } from "ng2-redux";
import { configureStore } from "./store/configure-store";
import { Observable } from "rxjs";
import { ToDo, IAppState } from "./models";
import { addTodo, deleteTodo, toggleTodo } from "./actions/todos";
import { changeFilter } from "./actions/filter";
import { combineLatest } from 'rxjs/operator/combineLatest';

@Component({
  selector: "my-app",
  template: `
  <GridLayout margin="12" rows="auto * auto">
    
    <td-header (addToDo)="addToDo($event)"></td-header>

    <td-todo-list row="1"
      [todos]="fitleredToDos$ | async" 
      (toggleToDo)="toggleToDo($event)"
      (deleteToDo)="deleteToDo($event)"></td-todo-list>

    <td-filter row="2"
     [currentFilter]="filter$ | async"
     (select)="selectFilter($event)"></td-filter>

  </GridLayout>`,
})
export class AppComponent {
  @select() filter$: Observable<string>;

  fitleredToDos$: Observable<ToDo[]>;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.fitleredToDos$ = ngRedux.select((s) => s).map(({filter, todos}) => {
      if (!todos) return [];

      if (filter === "active") {
        return todos.filter(todo => !todo.completed);
      } else if (filter === "done") {
        return todos.filter(todo => todo.completed);
      }

      return todos;
    });
  }

  addToDo(todoText: string) {
    this.ngRedux.dispatch(addTodo(todoText));
  }

  toggleToDo(id: number) {
    this.ngRedux.dispatch(toggleTodo(id));
  }

  deleteToDo(id: number) {
    this.ngRedux.dispatch(deleteTodo(id));
  }

  selectFilter(filter: string) {
    this.ngRedux.dispatch(changeFilter(filter));
  }
}
