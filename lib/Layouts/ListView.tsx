import * as React from "react";

export interface ListViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number, refCall: ((el: any) => any)): React.ReactElement<any>;
    sectionHeader?(atIndex: number): React.ReactElement<any>;
}
export interface ListViewProps{
    style?: object
}

export class ListView extends React.Component<ListViewProps, {}> implements ListViewProtocol{
    protected name: string = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);

    protected style = {
        sectionHeader: {
            borderBottom: "1px solid #bbb",
            background: "#f9f9fa",
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            fontWeight: "bold",
            textAlign: "left",
            fontSize: "12pt",
            position: "sticky",
            top: 0
        } as React.CSSProperties,
        row: {
            display: "flex",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #bbb",
            textAlign: "left"
        } as React.CSSProperties,
        listView: {
            overflow: "auto",
            flexGrow: 1
        }
    };

    numberOfSection(): number {
        return 0;
    }

    numberOfRow(inSection: number): number {
        return 0;
    }

    row(inSection: number, atIndex: number, refCall: ((el: any) => any)): React.ReactElement<any> {
        return <span/>;
    }

    sectionHeader(forSection: number): React.ReactElement<any> {
        return <span/>;
    }

    public render() {
            const layout: React.ReactChild[] = [];
            for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
                layout.push(this.sectionHeader(sectionIndex));
                for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                    layout.push(this.row(sectionIndex, rowIndex, (el) => {}));
                }
            }
            return (
                <div className={this.name} style={Object.assign({}, this.props.style, this.style.listView)}>
                    {layout}
                </div>
            );
    }
}