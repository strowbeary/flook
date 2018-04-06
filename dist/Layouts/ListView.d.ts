/// <reference types="react" />
import * as React from "react";
export interface ListViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number): React.ReactElement<any>;
    sectionHeader?(atIndex: number): React.ReactElement<any>;
    rowClick?(inSection: number, atIndex: number): void;
}
export interface ListViewProps {
    style?: object;
}
export declare class ListView extends React.Component<ListViewProps, {}> implements ListViewProtocol {
    protected name: string;
    protected style: {
        sectionHeader: React.CSSProperties;
        row: React.CSSProperties;
        listView: {
            overflow: string;
            flexGrow: number;
        };
    };
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number): React.ReactElement<any>;
    sectionHeader(forSection: number): React.ReactElement<any>;
    rowClick(inSection: number, atIndex: number): void;
    render(): JSX.Element;
}
