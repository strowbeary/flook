/// <reference types="react" />
/** @type {{search: React.CSSProperties}} */
import * as React from "react";
export interface ToolbarViewProtocol {
    title: string;
    leftView(): React.ReactElement<any>;
    rightView(): React.ReactElement<any>;
}
export declare class ToolbarView extends React.Component implements ToolbarViewProtocol {
    title: string;
    protected name: string;
    protected style: {
        toolbar: React.CSSProperties;
    };
    leftView(): React.ReactElement<any>;
    rightView(): React.ReactElement<any>;
    render(): JSX.Element;
}
