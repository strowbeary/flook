import * as React from "react";

export interface StackViewProps {
    horizontal?: boolean;
    separator?: boolean;
}

export class StackView extends React.Component<StackViewProps> {

    protected style = {
        separator: {
            borderBottom: "1px solid #bbb",
            borderLeft: "1px solid #bbb",
            height: (this.props.horizontal !== void 0 && this.props.horizontal) ? "100%" : 0,
            width: (this.props.horizontal !== void 0 && this.props.horizontal) ? 0 : "100%"
        } as React.CSSProperties,
        stackView: {
            display: "flex",
            flexDirection: (this.props.horizontal !== void 0 && this.props.horizontal) ? "row" : "column",
            alignItems: "stretch",
            overflow: "hidden",
            flexGrow: 1
        } as React.CSSProperties
    };

    public render() {
        const children: Array<React.ReactElement<any>> = [];
        let separatorKey = 0;
        for (const child of this.props.children as Array<React.ReactElement<any>>) {
            children.push(child);
            if (this.props.separator !== void 0 && this.props.separator && separatorKey < (this.props.children as Array<React.ReactElement<any>>).length) {
                children.push(<div key={separatorKey} style={this.style.separator}/>);
            }
            separatorKey += 1;
        }
        return (
            <div style={this.style.stackView}>
                {children}
            </div>
        );
    }
}