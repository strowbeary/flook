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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = {
            separator: {
                borderBottom: "1px solid #bbb",
                borderLeft: "1px solid #bbb",
                height: (_this.props.horizontal !== void 0 && _this.props.horizontal) ? "100%" : 0,
                width: (_this.props.horizontal !== void 0 && _this.props.horizontal) ? 0 : "100%"
            },
            stackView: {
                display: "flex",
                flexDirection: (_this.props.horizontal !== void 0 && _this.props.horizontal) ? "row" : "column",
                alignItems: "stretch",
                overflow: "hidden",
                flexGrow: 1
            }
        };
        return _this;
    }
    StackView.prototype.render = function () {
        var children = [];
        var separatorKey = 0;
        for (var _i = 0, _a = this.props.children; _i < _a.length; _i++) {
            var child = _a[_i];
            children.push(child);
            if (this.props.separator !== void 0 && this.props.separator && separatorKey < this.props.children.length) {
                children.push(<div key={separatorKey} style={this.style.separator}/>);
            }
            separatorKey += 1;
        }
        return (<div style={this.style.stackView}>
                {children}
            </div>);
    };
    return StackView;
}(React.Component));
exports.StackView = StackView;
