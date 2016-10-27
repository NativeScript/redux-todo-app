"use strict";
var core_1 = require('@angular/core');
var ToDoComponent = (function () {
    function ToDoComponent() {
        this.toggle = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToDoComponent.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToDoComponent.prototype, "toggle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToDoComponent.prototype, "delete", void 0);
    ToDoComponent = __decorate([
        core_1.Component({
            selector: 'td-todo',
            template: "\n<GridLayout columns=\"auto * auto\" rows=\"auto\">\n    <Button col=\"0\" [text]=\"todo.completed ? 'done' : 'undo'\" (tap)=\"toggle.next()\"></Button>\n    <Label col=\"1\" [text]=\"todo.text\" textWrap=\"true\" \n      [class.completed]=\"todo.completed\"\n      [class.pending]=\"!todo.completed\"></Label>\n    <Button col=\"2\" text=\"x\" (tap)=\"delete.next()\"></Button>\n</GridLayout>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ToDoComponent);
    return ToDoComponent;
}());
exports.ToDoComponent = ToDoComponent;
//# sourceMappingURL=todo.component.js.map