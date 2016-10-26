// this import should be first in order to load some required settings (like globals and reflect-metadata)
global.process = { env: {} };
require('nativescript-websockets');

import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import "./polyfills";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState } from "./models";
import { configureStore } from "./store/configure-store";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NgReduxModule],
})
class AppComponentModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(configureStore(undefined));
  }
}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);