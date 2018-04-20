import * as React from "react";

export interface ScrollViewProps {
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactChildren;
}

export class ScrollView extends React.Component<ScrollViewProps> {


    public render() {
        return (
            <div className={`scrollView ${this.props.className}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}