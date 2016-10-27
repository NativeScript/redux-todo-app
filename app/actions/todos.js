"use strict";
var types = require('../reducers/constants');
function addTodo(text) {
    return { type: types.ADD_TODO, text: text };
}
exports.addTodo = addTodo;
function deleteTodo(id) {
    return { type: types.DELETE_TODO, id: id };
}
exports.deleteTodo = deleteTodo;
function editTodo(id, text) {
    return { type: types.EDIT_TODO, id: id, text: text };
}
exports.editTodo = editTodo;
function toggleTodo(id) {
    return { type: types.TOGGLE_TODO, id: id };
}
exports.toggleTodo = toggleTodo;
function completeAll() {
    return { type: types.COMPLETE_ALL };
}
exports.completeAll = completeAll;
function clearCompleted() {
    return { type: types.CLEAR_COMPLETED };
}
exports.clearCompleted = clearCompleted;
//# sourceMappingURL=todos.js.map