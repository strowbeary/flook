import * as React from "react";
export class TableView extends React.Component {
    numberOfSection() {
        return 0;
    }
    numberOfRowInSection() {
        return 0;
    }
    row(inSection, atIndex) {
        return (React.createElement("div", null, atIndex));
    }
    sectionHeader(atIndex) {
        return (React.createElement("div", null, atIndex));
    }
    render() {
        const layout = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRowInSection(); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex));
            }
        }
        return layout;
    }
}
