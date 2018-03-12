/** @type {{search: React.CSSProperties}} */
import * as React from "react";
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
                textAlign: "left",
                fontSize: "14pt",
                position: "sticky",
                top: 0
            }
        };
    }
    leftAction() {
        return React.createElement("span", null);
    }
    rightAction() {
        return React.createElement("span", null);
    }
    render() {
        return (React.createElement("div", { className: this.name, style: this.style.toolbar },
            React.createElement("h1", null, this.title),
            React.createElement("div", null, this.leftAction()),
            React.createElement("div", null, this.rightAction())));
    }
}
