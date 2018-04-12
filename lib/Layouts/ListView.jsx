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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListView.prototype.numberOfSection = function () {
        return 0;
    };
    ListView.prototype.numberOfRow = function (inSection) {
        return 0;
    };
    ListView.prototype.row = function (inSection, atIndex) {
        return <span />;
    };
    ListView.prototype.sectionHeader = function (forSection) {
        return <span />;
    };
    ListView.prototype.rowClick = function (inSection, atIndex) { };
    ListView.prototype.render = function () {
        var _this = this;
        var layout = [];
        var _loop_1 = function (sectionIndex) {
            layout.push((<div className="sectionHeader" key={"section-" + sectionIndex}>
                        {this_1.sectionHeader(sectionIndex)}
                    </div>));
            var _loop_2 = function (rowIndex) {
                layout.push((<div className="row" key={"row-" + sectionIndex + "-" + rowIndex} onClickCapture={function () { return _this.rowClick(sectionIndex, rowIndex); }}>
                            {this_1.row(sectionIndex, rowIndex)}
                        </div>));
            };
            for (var rowIndex = 0; rowIndex < this_1.numberOfRow(sectionIndex); rowIndex += 1) {
                _loop_2(rowIndex);
            }
        };
        var this_1 = this;
        for (var sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            _loop_1(sectionIndex);
        }
        return (<div className={"listView " + this.props.className}>
                    {layout}
                </div>);
    };
    return ListView;
}(React.Component));
exports.ListView = ListView;
