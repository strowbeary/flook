"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class StackView extends React.Component {
    render() {
        const disposition = (this.props.horizontal !== void 0 && this.props.horizontal) ? "row" : "column";
        const children = React.Children.map(this.props.children, (child, separatorKey) => {
            const separator = this.props.separator !== void 0 && this.props.separator && separatorKey < this.props.children.length - 1;
            return [
                child,
                separator ? React.createElement("div", { key: separatorKey, className: "separator" }) : null
            ];
        });
        return (React.createElement("div", { className: `stackView ${disposition} ${this.props.className}`, style: this.props.style }, children));
    }
}
exports.StackView = StackView;
