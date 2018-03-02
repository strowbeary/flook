import * as React from "react";
export class StackView extends React.Component {
    constructor() {
        super(...arguments);
        this.style = {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%"
        };
    }
    render() {
        return (React.createElement("div", { style: this.style }, this.props.children));
    }
}
