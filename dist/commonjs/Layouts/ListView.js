"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ListView extends React.Component {
    constructor() {
        super(...arguments);
        this.name = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);
        this.style = {
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
            },
            row: {
                display: "flex",
                alignItems: "center",
                padding: "20px",
                borderBottom: "1px solid #bbb",
                textAlign: "left"
            },
            listView: {
                overflow: "auto",
                flexGrow: 1
            }
        };
    }
    numberOfSection() {
        return 0;
    }
    numberOfRow(inSection) {
        return 0;
    }
    row(inSection, atIndex, refCall) {
        return React.createElement("span", null);
    }
    sectionHeader(forSection) {
        return React.createElement("span", null);
    }
    render() {
        const layout = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex, (el) => { }));
            }
        }
        return (React.createElement("div", { className: this.name, style: Object.assign({}, this.props.style, this.style.listView) }, layout));
    }
}
exports.ListView = ListView;
