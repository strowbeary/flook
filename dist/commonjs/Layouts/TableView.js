"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class TableView extends React.Component {
    numberOfSection() {
        return 0;
    }
    numberOfRow(inSection) {
        return 0;
    }
    row(inSection, atIndex) {
        return (React.createElement("div", null, atIndex));
    }
    sectionHeader(forSection) {
        return (React.createElement("div", null, forSection));
    }
    render() {
        const layout = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex));
            }
        }
        return (React.createElement("div", { className: this.constructor.name, style: this.props.style }, layout));
    }
}
exports.TableView = TableView;
