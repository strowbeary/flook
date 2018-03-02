/// <reference types="react" />
import * as React from "react";
export interface ListViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number, refCall: ((el: any) => any)): React.ReactElement<any>;
    sectionHeader?(atIndex: number): React.ReactElement<any>;
}
export interface ListViewProps {
    style?: object;
}
export declare class ListView extends React.Component<ListViewProps, {}> implements ListViewProtocol {
    protected name: string;
    protected style: {
        sectionHeader: React.CSSProperties;
        row: React.CSSProperties;
        image: React.CSSProperties;
    };
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number, refCall: ((el: any) => any)): React.ReactElement<any>;
    sectionHeader(forSection: number): React.ReactElement<any>;
    render(): JSX.Element;
}
