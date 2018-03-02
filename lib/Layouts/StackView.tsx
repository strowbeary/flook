import * as React from "react";

export class StackView extends React.Component {

    protected style = {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%"
    } as React.CSSProperties;

    render() {
        return (
            <div style={this.style}>
                {this.props.children}
            </div>
        );
    }
}