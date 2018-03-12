/// <reference types="react" />
import * as React from "react";
export interface StackViewProps {
    horizontal?: boolean;
    separator?: boolean;
}
export declare class StackView extends React.Component<StackViewProps> {
    protected style: {
        separator: React.CSSProperties;
        stackView: React.CSSProperties;
    };
    render(): JSX.Element;
}
