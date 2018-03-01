/// <reference types="react" />
import * as React from "react";
export interface TableViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number): React.ReactChild;
    sectionHeader(atIndex: number): React.ReactChild;
}
export interface TableViewProps {
    style?: object;
}
export declare class TableView extends React.Component<TableViewProps, {}> implements TableViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number): React.ReactChild;
    sectionHeader(forSection: number): React.ReactChild;
    render(): JSX.Element;
}
