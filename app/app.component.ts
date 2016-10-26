import { Component } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { configureStore } from "./store/configure-store";
import { select } from 'ng2-redux';
import { Observable } from "rxjs";
import { ToDo, IAppState } from "./models";
import { addTodo,  } from "./actions/todos";
@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
})
export class AppComponent {
  @select() todos$: Observable<Array<ToDo>>;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  onTap(){
    console.log("here");
    this.ngRedux.dispatch(addTodo("new todo"));
  }
}
