"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {{search: React.CSSProperties}} */
const React = require("react");
const Text_1 = require("./Text");
class ToolbarView extends React.Component {
    constructor() {
        super(...arguments);
        this.title = "";
        this.name = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);
        this.style = {
            toolbar: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background: "#f9f9fa",
                padding: "10px 20px",
                position: "sticky",
                top: 0
            }
        };
    }
    leftView() {
        return React.createElement("span", null);
    }
    rightView() {
        return React.createElement("span", null);
    }
    render() {
        return (React.createElement("div", { className: this.name, style: this.style.toolbar },
            React.createElement(Text_1.Text.heading, null, this.title),
            React.createElement("div", null, this.leftView()),
            React.createElement("div", null, this.rightView())));
    }
}
exports.ToolbarView = ToolbarView;
