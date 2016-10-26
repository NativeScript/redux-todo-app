import { createStore } from 'redux';
import rootReducer from '../reducers';
import { isAndroid } from "platform";
var devTools = require('remote-redux-devtools').default;
var hostname = isAndroid ? "10.0.3.2" : "localhost";

import { NgReduxModule, NgRedux } from 'ng2-redux';


export function configureStore(initialState) {
  console.log("--> Configuring store...");
  const store = createStore(
    rootReducer,
    initialState,
    devTools({
      hostname,
      port: 8000,
      realtime: true
    })
    
    );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers').default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
