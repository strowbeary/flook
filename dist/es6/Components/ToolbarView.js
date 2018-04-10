/** @type {{search: React.CSSProperties}} */
import * as React from "react";
import { Text } from "./Text";
export class ToolbarView extends React.Component {
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
            React.createElement(Text.heading, null, this.title),
            React.createElement("div", null, this.leftView()),
            React.createElement("div", null, this.rightView())));
    }
}
