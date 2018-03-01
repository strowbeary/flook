import * as React from "react";
export class TableView extends React.Component {
    numberOfSection() {
        return 1;
    }
    numberOfRowInSection() {
        return 1;
    }
    sectionHeader(atIndex) {
        return (React.createElement("h3", null, atIndex));
    }
    row(inSection, atIndex) {
        return (React.createElement("div", { className: "tableViewCell" }, atIndex));
    }
    render() {
        let layout = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRowInSection(); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex));
            }
        }
        return layout;
    }
}
