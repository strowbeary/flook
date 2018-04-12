import * as React from "react";

export interface InputLineProps {
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactChildren;
}

export class InputLine extends React.Component<InputLineProps> {


    public render() {

        return (
            <div className={`inputLine ${this.props.className}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}