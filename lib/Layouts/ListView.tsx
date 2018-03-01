import * as React from "react";

export interface ListViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number): React.ReactChild;
    sectionHeader?(atIndex: number): React.ReactChild;
}
export interface ListViewProps{
    style?: object
}
export class ListView extends React.Component<ListViewProps, {}> implements ListViewProtocol{
    protected name: string = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);
    numberOfSection(): number {
        return 0;
    }

    numberOfRow(inSection: number): number {
        return 0;
    }

    row(inSection: number, atIndex: number): React.ReactChild {
        return "";
    }

    sectionHeader(forSection: number): React.ReactChild {
        return "";
    }


    public render() {
        const layout: React.ReactChild[] = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex));
            }
        }
        return (
            <div className={this.name} style={this.props.style}>
                {layout}
            </div>
        );
    }
}