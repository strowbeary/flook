"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Text = {
    heading: function (props) {
        return (<h1 className={"heading"}>{props.children}</h1>);
    },
    screenTitle: function (props) {
        return (<span className={"screenTitle"}>{props.children}</span>);
    },
    sectionTitle: function (props) {
        return (<span className={"sectionTitle"}>{props.children}</span>);
    },
    emphasis: function (props) {
        return (<span className={"emphasis"}>{props.children}</span>);
    },
    body: function (props) {
        return (<p className={"body"}>{props.children}</p>);
    },
    label: function (props) {
        return (<span className={"label"}>{props.children}</span>);
    },
    signlabel: function (props) {
        return (<span className={"signlabel"}>{props.children}</span>);
    },
};
