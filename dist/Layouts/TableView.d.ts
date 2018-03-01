/// <reference types="react" />
import * as React from "react";
export interface TableViewProtocol {
    numberOfSection(): number;
    numberOfRowInSection(): number;
    row(inSection: number, atIndex: number): React.ReactChild;
    sectionHeader(atIndex: number): React.ReactChild;
}
export declare class TableView extends React.Component<{}, {}> implements TableViewProtocol {
    numberOfSection(): number;
    numberOfRowInSection(): number;
    row(inSection: number, atIndex: number): React.ReactChild;
    sectionHeader(atIndex: number): React.ReactChild;
    render(): React.ReactChild[];
}
