"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {{search: React.CSSProperties}} */
var React = require("react");
var ToolbarView = /** @class */ (function (_super) {
    __extends(ToolbarView, _super);
    function ToolbarView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarView.prototype.render = function () {
        return (<div className={"toolbar"}>
                {this.props.children}
            </div>);
    };
    return ToolbarView;
}(React.Component));
exports.ToolbarView = ToolbarView;
