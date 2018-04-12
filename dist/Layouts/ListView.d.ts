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
    className?: string;
}
export declare class ListView extends React.Component<ListViewProps, {}> implements ListViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number): React.ReactElement<any>;
    sectionHeader(forSection: number): React.ReactElement<any>;
    rowClick(inSection: number, atIndex: number): void;
    render(): JSX.Element;
}
