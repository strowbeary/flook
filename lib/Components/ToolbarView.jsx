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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "";
        _this.name = _this.constructor.name.charAt(0).toLowerCase() + _this.constructor.name.slice(1);
        _this.style = {
            toolbar: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background: "#f9f9fa",
                padding: "10px 20px",
                textAlign: "left",
                fontSize: "14pt",
                position: "sticky",
                top: 0
            }
        };
        return _this;
    }
    ToolbarView.prototype.leftAction = function () {
        return <span />;
    };
    ToolbarView.prototype.rightAction = function () {
        return <span />;
    };
    ToolbarView.prototype.render = function () {
        return (<div className={this.name} style={this.style.toolbar}>
                <h1>{this.title}</h1>
                <div>
                    {this.leftAction()}
                </div>

                <div>
                    {this.rightAction()}
                </div>
            </div>);
    };
    return ToolbarView;
}(React.Component));
exports.ToolbarView = ToolbarView;
