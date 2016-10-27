"use strict";
var core_1 = require('@angular/core');
var ToDoListComponent = (function () {
    function ToDoListComponent() {
        this.toggleToDo = new core_1.EventEmitter();
        this.deleteToDo = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ToDoListComponent.prototype, "todos", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToDoListComponent.prototype, "toggleToDo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToDoListComponent.prototype, "deleteToDo", void 0);
    ToDoListComponent = __decorate([
        core_1.Component({
            selector: 'td-todo-list',
            template: "\n<StackLayout>\n    <td-todo *ngFor=\"let todo of todos\" \n      [todo]=\"todo\" \n      (toggle)=\"toggleToDo.next(todo.id)\"\n      (delete)=\"deleteToDo.next(todo.id)\">\n    </td-todo>\n</StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ToDoListComponent);
    return ToDoListComponent;
}());
exports.ToDoListComponent = ToDoListComponent;
//# sourceMappingURL=todo-list.component.js.map