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
var Macaroon = /** @class */ (function (_super) {
    __extends(Macaroon, _super);
    function Macaroon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Macaroon.prototype.generateColor = function () {
        var hash = 50;
        for (var i = 0; i < this.props.value.length; i++) {
            hash = this.props.value.charCodeAt(i) + ((hash << 5) - hash);
        }
        var c = (hash & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();
        return "00000".substring(0, 6 - c.length) + c;
    };
    Macaroon.prototype.render = function () {
        var accr = this.props.value.split(" ")
            .map(function (part) {
            return part.charAt(0);
        })
            .join("");
        return (<div className={"macaroon"} style={{ background: "#" + this.generateColor() }}>
                <span>{accr}</span>
            </div>);
    };
    return Macaroon;
}(React.Component));
exports.Macaroon = Macaroon;
