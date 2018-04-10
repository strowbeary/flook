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

export class ListView extends React.Component<ListViewProps, {}> implements ListViewProtocol{
    protected name: string = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);

    public numberOfSection(): number {
        return 0;
    }

    public numberOfRow(inSection: number): number {
        return 0;
    }

    public row(inSection: number, atIndex: number): React.ReactElement<any> {
        return <span/>;
    }

    public sectionHeader(forSection: number): React.ReactElement<any> {
        return <span/>;
    }

    public rowClick(inSection: number, atIndex: number) { }

    public render() {
            const layout: React.ReactChild[] = [];
            for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
                layout.push((
                    <div className="sectionHeader" key={`section-${sectionIndex}`}>
                        {this.sectionHeader(sectionIndex)}
                    </div>
                ));
                for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                    layout.push((
                        <div className="row" key={`row-${sectionIndex}-${rowIndex}`} onClick={() => this.rowClick(sectionIndex, rowIndex)}>
                            {this.row(sectionIndex, rowIndex)}
                        </div>
                    ));
                }
            }
            return (
                <div className={this.name + " listView"}>
                    {layout}
                </div>
            );
    }
}