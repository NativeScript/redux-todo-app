"use strict";
var redux_1 = require('redux');
var reducers_1 = require('../reducers');
var platform_1 = require("platform");
var devTools = require('remote-redux-devtools').default;
var hostname = platform_1.isAndroid ? "10.0.3.2" : "localhost";
function configureStore(initialState) {
    var store = redux_1.createStore(reducers_1.default, initialState, devTools({
        hostname: hostname,
        port: 8000,
        realtime: true
    }));
    return store;
}
exports.configureStore = configureStore;
//# sourceMappingURL=configure-store.js.map