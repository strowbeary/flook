import * as React from "react";

const rowOutOfViewport = new Set<number>();
export interface ListViewProtocol {
    numberOfSection(): number;
    numberOfRow(inSection: number): number;
    row(inSection: number, atIndex: number, refCall: ((el: any) => any)): React.ReactChild;
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

    row(inSection: number, atIndex: number, refCall: ((el: any) => any)): React.ReactChild {
        return "";
    }

    sectionHeader(forSection: number): React.ReactChild {
        return <div>{forSection}</div>;
    }

    public render() {
        let layout: React.ReactChild[] = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex, this.refCaller.bind(this)));
            }
        }

        return (
            <div className={this.name} style={this.props.style}>
                {layout}
            </div>
        );
    }

    private scrollAndResizeHandler(el: any) {
        if((el.getBoundingClientRect().top <= -el.clientHeight) || (el.getBoundingClientRect().top >= window.innerHeight)) {
            rowOutOfViewport.add(parseInt(el.attributes["data-key"].value));
            this.forceUpdate();
        } else {
            rowOutOfViewport.delete(parseInt(el.attributes["data-key"].value));
            this.forceUpdate();
        }
    }


    private refCaller(el: any): any{

    }
}