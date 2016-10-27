import { createStore } from 'redux';
import rootReducer from '../reducers';
import { isAndroid } from "platform";
import { NgReduxModule, NgRedux } from 'ng2-redux';
var devTools = require('remote-redux-devtools').default;

var hostname = isAndroid ? "10.0.3.2" : "localhost";
var name = (isAndroid ? "android-" : "ios-") + Math.floor(Math.random() * 100000);

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    devTools({
      name,
      hostname,
      port: 8000,
      realtime: true
    })

  );
  return store;
}
