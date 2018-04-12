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
var StackView = /** @class */ (function (_super) {
    __extends(StackView, _super);
    function StackView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackView.prototype.render = function () {
        var _this = this;
        var disposition = (this.props.horizontal !== void 0 && this.props.horizontal) ? "row" : "column";
        var children = React.Children.map(this.props.children, function (child, separatorKey) {
            var separator = _this.props.separator !== void 0 && _this.props.separator && separatorKey < _this.props.children.length - 1;
            return [
                child,
                separator ? <div key={separatorKey} className={"separator"}/> : null
            ];
        });
        return (<div className={"stackView " + disposition + " " + this.props.className} style={this.props.style}>
                {children}
            </div>);
    };
    return StackView;
}(React.Component));
exports.StackView = StackView;
