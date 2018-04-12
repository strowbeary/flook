/// <reference types="react" />
import * as React from "react";
export interface StackViewProps {
    horizontal?: boolean;
    separator?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactChildren;
}
export declare class StackView extends React.Component<StackViewProps> {
    render(): JSX.Element;
}
