import * as React from "react";

export interface TableViewProtocol {
    numberOfSection(): number
    numberOfRowInSection(): number
    row(inSection: number, atIndex: number): React.ReactChild
    sectionHeader(atIndex: number) : React.ReactChild
}

interface TableViewProps {
    delegate: TableViewProtocol
}

export class TableView extends React.Component<TableViewProps>{

    private delegate: TableViewProtocol = this.props.delegate;

    render() {
        let layout: React.ReactChild[] = [];
        for (let sectionIndex = 0; sectionIndex < this.delegate.numberOfSection(); sectionIndex += 1) {
            layout.push(this.delegate.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.delegate.numberOfRowInSection(); rowIndex += 1) {
                layout.push(this.delegate.row(sectionIndex, rowIndex));
            }
        }
        return layout;
    }
}