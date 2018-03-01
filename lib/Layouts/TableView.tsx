import * as React from "react";

export interface TableViewProtocol {
    numberOfSection(): number;
    numberOfRowInSection(): number;
    row(inSection: number, atIndex: number): React.ReactChild;
    sectionHeader(atIndex: number): React.ReactChild;
}

export class TableView extends React.Component<{}, {}> implements TableViewProtocol{
    numberOfSection(): number {
        return 0;
    }

    numberOfRowInSection(): number {
        return 0;
    }

    row(inSection: number, atIndex: number): React.ReactChild {
        return (<div>{atIndex}</div>);
    }

    sectionHeader(atIndex: number): React.ReactChild {
        return (<div>{atIndex}</div>);
    }


    public render() {
        const layout: React.ReactChild[] = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRowInSection(); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex));
            }
        }
        return layout;
    }
}