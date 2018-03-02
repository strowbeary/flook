/// <reference types="react" />
import * as React from "react";
export interface ListViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number, refCall: ((el: any) => any)): React.ReactChild;
    sectionHeader?(atIndex: number): React.ReactChild;
}
export interface ListViewProps {
    style?: object;
}
export declare class ListView extends React.Component<ListViewProps, {}> implements ListViewProtocol {
    protected name: string;
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number, refCall: ((el: any) => any)): React.ReactChild;
    sectionHeader(forSection: number): React.ReactChild;
    render(): JSX.Element;
    private scrollAndResizeHandler(el);
    private refCaller(el);
}
