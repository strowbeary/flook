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
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = _this.constructor.name.charAt(0).toLowerCase() + _this.constructor.name.slice(1);
        _this.style = {
            sectionHeader: {
                borderBottom: "1px solid #bbb",
                background: "#f9f9fa",
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                fontWeight: "bold",
                textAlign: "left",
                fontSize: "12pt",
                position: "sticky",
                top: 0
            },
            row: {
                display: "flex",
                alignItems: "center",
                padding: "20px",
                borderBottom: "1px solid #bbb",
                textAlign: "left"
            },
            listView: {
                overflow: "auto",
                flexGrow: 1
            }
        };
        return _this;
    }
    ListView.prototype.numberOfSection = function () {
        return 0;
    };
    ListView.prototype.numberOfRow = function (inSection) {
        return 0;
    };
    ListView.prototype.row = function (inSection, atIndex, refCall) {
        return <span />;
    };
    ListView.prototype.sectionHeader = function (forSection) {
        return <span />;
    };
    ListView.prototype.render = function () {
        var layout = [];
        for (var sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (var rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex, function (el) { }));
            }
        }
        return (<div className={this.name} style={Object.assign({}, this.props.style, this.style.listView)}>
                    {layout}
                </div>);
    };
    return ListView;
}(React.Component));
exports.ListView = ListView;
