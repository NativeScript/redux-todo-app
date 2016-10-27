"use strict";
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.addToDo = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.add = function () {
        if (this.text) {
            this.addToDo.next(this.text);
            this.text = "";
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "addToDo", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'td-header',
            template: "\n  <GridLayout rows=\"auto auto\" columns=\"* auto\" margin=\"0 0 24 0\">\n      <Label text=\"todos\" class=\"header\" colSpan=\"2\"></Label>\n      \n      <TextField row=\"1\"\n          hint=\"What needs to be done?\" \n          [(ngModel)]=\"text\"></TextField>\n\n      <Button row=\"1\" col=\"1\" text=\"+\" (tap)=\"add()\" class=\"add\"></Button>\n  </GridLayout>  \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map