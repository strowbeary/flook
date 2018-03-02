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
                "align-items": "center",
                padding: "10px 20px",
                "font-weight": "bold",
                "text-align": "left",
                fontSize: "12pt",
                position: "sticky",
                top: 0
            },
            row: {
                display: "flex",
                "align-items": "center",
                padding: "20px",
                borderBottom: "1px solid #bbb",
                "text-align": "left"
            },
            image: {
                width: "100px",
                height: "100px",
                marginRight: "20px"
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
        let layout = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex, (el) => { }));
            }
        }
        return (React.createElement("div", { className: this.name, style: this.props.style }, layout));
    }
}
exports.ListView = ListView;
