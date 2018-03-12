import * as React from "react";
export class StackView extends React.Component {
    constructor() {
        super(...arguments);
        this.style = {
            separator: {
                borderBottom: "1px solid #bbb",
                borderLeft: "1px solid #bbb",
                height: (this.props.horizontal !== void 0 && this.props.horizontal) ? "100%" : 0,
                width: (this.props.horizontal !== void 0 && this.props.horizontal) ? 0 : "100%"
            },
            stackView: {
                display: "flex",
                flexDirection: (this.props.horizontal !== void 0 && this.props.horizontal) ? "row" : "column",
                alignItems: "stretch",
                overflow: "hidden",
                flexGrow: 1
            }
        };
    }
    render() {
        const children = [];
        let separatorKey = 0;
        for (const child of this.props.children) {
            children.push(child);
            if (this.props.separator !== void 0 && this.props.separator && separatorKey < this.props.children.length) {
                children.push(React.createElement("div", { key: separatorKey, style: this.style.separator }));
            }
            separatorKey += 1;
        }
        return (React.createElement("div", { style: this.style.stackView }, children));
    }
}
