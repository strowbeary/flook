import * as React from "react";
export class ListView extends React.Component {
    constructor() {
        super(...arguments);
        this.name = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);
    }
    numberOfSection() {
        return 0;
    }
    numberOfRow(inSection) {
        return 0;
    }
    row(inSection, atIndex) {
        return React.createElement("span", null);
    }
    sectionHeader(forSection) {
        return React.createElement("span", null);
    }
    rowClick(inSection, atIndex) { }
    render() {
        const layout = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push((React.createElement("div", { className: "sectionHeader", key: `section-${sectionIndex}` }, this.sectionHeader(sectionIndex))));
            for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push((React.createElement("div", { className: "row", key: `row-${sectionIndex}-${rowIndex}`, onClick: () => this.rowClick(sectionIndex, rowIndex) }, this.row(sectionIndex, rowIndex))));
            }
        }
        return (React.createElement("div", { className: this.name + " listView" }, layout));
    }
}
