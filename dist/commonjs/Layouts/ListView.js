"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rowOutOfViewport = new Set();
class ListView extends React.Component {
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
    row(inSection, atIndex, refCall) {
        return "";
    }
    sectionHeader(forSection) {
        return React.createElement("div", null, forSection);
    }
    render() {
        let layout = [];
        for (let sectionIndex = 0; sectionIndex < this.numberOfSection(); sectionIndex += 1) {
            layout.push(this.sectionHeader(sectionIndex));
            for (let rowIndex = 0; rowIndex < this.numberOfRow(sectionIndex); rowIndex += 1) {
                layout.push(this.row(sectionIndex, rowIndex, this.refCaller.bind(this)));
            }
        }
        return (React.createElement("div", { className: this.name, style: this.props.style }, layout));
    }
    scrollAndResizeHandler(el) {
        if ((el.getBoundingClientRect().top <= -el.clientHeight) || (el.getBoundingClientRect().top >= window.innerHeight)) {
            rowOutOfViewport.add(parseInt(el.attributes["data-key"].value));
            this.forceUpdate();
        }
        else {
            rowOutOfViewport.delete(parseInt(el.attributes["data-key"].value));
            this.forceUpdate();
        }
    }
    refCaller(el) {
    }
}
exports.ListView = ListView;
