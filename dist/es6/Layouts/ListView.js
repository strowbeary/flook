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
        return "";
    }
    sectionHeader(forSection) {
        return "";
    }
    render() {
        const layout = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex));
            }
        }
        return (React.createElement("div", { className: this.name, style: this.props.style }, layout));
    }
}
