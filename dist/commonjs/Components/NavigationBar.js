"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class NavigationBar extends React.Component {
    constructor() {
        super(...arguments);
        this.name = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);
        this.style = {};
    }
    render() {
        return (React.createElement("div", { className: this.name }, this.props.children));
    }
}
exports.NavigationBar = NavigationBar;
