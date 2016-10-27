"use strict";
var redux_1 = require('redux');
var todos_1 = require('./todos');
var filter_1 = require('./filter');
var rootReducer = redux_1.combineReducers({
    todos: todos_1.todos,
    filter: filter_1.filter
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootReducer;
//# sourceMappingURL=index.js.map