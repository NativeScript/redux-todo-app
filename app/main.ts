// this import should be first in order to load some required settings (like globals and reflect-metadata)
global.process = { env: {} };
require('nativescript-websockets');

import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import "./polyfills";
import { NgModule, NgZone, ApplicationRef } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header.component";
import { FilterComponent } from "./components/filter.component";
import { ToDoListComponent } from "./components/todo-list.component";
import { ToDoComponent } from "./components/todo.component";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState } from "./models";
import { configureStore } from "./store/configure-store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ToDoListComponent,
    ToDoComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NgReduxModule],
})
class AppComponentModule {
  constructor(ngRedux: NgRedux<IAppState>, appRef: ApplicationRef) {
    ngRedux.provideStore(configureStore(undefined));
    ngRedux.subscribe(() => {
      if (!NgZone.isInAngularZone()) {
        setTimeout(() => {
          appRef.tick();
        }, 10); 
      }
    });

  }
}

platformNativeScriptDynamic({ startPageActionBarHidden: true, bootInExistingPage: false })
  .bootstrapModule(AppComponentModule);