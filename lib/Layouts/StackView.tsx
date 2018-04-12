import * as React from "react";

export interface StackViewProps {
    horizontal?: boolean;
    separator?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactChildren;
}

export class StackView extends React.Component<StackViewProps> {


    public render() {
        const disposition =  (this.props.horizontal !== void 0 && this.props.horizontal) ? "row" : "column";
        const children = React.Children.map(this.props.children, (child, separatorKey) => {
            const separator = this.props.separator !== void 0 && this.props.separator && separatorKey < (this.props.children as Array<React.ReactElement<any>>).length - 1;
            return [
                child,
                separator ? <div key={separatorKey} className={"separator"}/> : null
            ];
        });
        return (
            <div className={`stackView ${disposition} ${this.props.className}`} style={this.props.style}>
                {children}
            </div>
        );
    }
}