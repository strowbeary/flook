/** @type {{search: React.CSSProperties}} */
import * as React from "react";
export class ToolbarView extends React.Component {
    render() {
        return (React.createElement("div", { className: `toolbar` }, this.props.children));
    }
}
