"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {{search: React.CSSProperties}} */
const React = require("react");
class ToolbarView extends React.Component {
    render() {
        return (React.createElement("div", { className: `toolbar` }, this.props.children));
    }
}
exports.ToolbarView = ToolbarView;
