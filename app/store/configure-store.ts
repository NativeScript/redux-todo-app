import { createStore } from 'redux';
import rootReducer from '../reducers';
import { isAndroid } from "platform";
var devTools = require('remote-redux-devtools').default;
var hostname = isAndroid ? "10.0.3.2" : "localhost";

import { NgReduxModule, NgRedux } from 'ng2-redux';


export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    devTools({
      hostname,
      port: 8000,
      realtime: true
    })

  );
  return store;
}
