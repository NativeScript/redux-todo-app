// this import should be first in order to load some required settings (like globals and reflect-metadata)
global.process = { env: {} };
require('nativescript-websockets');

import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import "./polyfills";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header.component";
import { ToDoListComponent } from "./components/todo-list.component";
import { ToDoComponent } from "./components/todo.component";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState } from "./models";
import { configureStore } from "./store/configure-store";

@NgModule({
  declarations: [AppComponent, HeaderComponent, ToDoListComponent, ToDoComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NgReduxModule],
})
class AppComponentModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(configureStore(undefined));
  }
}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);