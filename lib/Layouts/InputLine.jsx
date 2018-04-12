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
var React = require("react");
var InputLine = /** @class */ (function (_super) {
    __extends(InputLine, _super);
    function InputLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputLine.prototype.render = function () {
        return (<div className={"inputLine " + this.props.className} style={this.props.style}>
                {this.props.children}
            </div>);
    };
    return InputLine;
}(React.Component));
exports.InputLine = InputLine;
