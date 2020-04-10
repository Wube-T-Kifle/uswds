"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Select_1 = require("formiojs/components/select/Select");
var Select_form_1 = require("formiojs/components/select/Select.form");
var USWDSSelectComponent = /** @class */ (function (_super) {
    __extends(USWDSSelectComponent, _super);
    function USWDSSelectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USWDSSelectComponent.prototype.choicesOptions = function () {
        var choicesOptions = _super.prototype.choicesOptions.call(this);
        choicesOptions.classNames.containerOuter += ' usa-input';
        return choicesOptions;
    };
    return USWDSSelectComponent;
}(Select_1.default));
exports.default = USWDSSelectComponent;
USWDSSelectComponent.editForm = Select_form_1.default;