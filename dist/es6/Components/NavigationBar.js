import * as React from "react";
export class NavigationBar extends React.Component {
    constructor() {
        super(...arguments);
        this.name = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);
        this.style = {};
    }
    render() {
        return (React.createElement("div", { className: this.name }, this.props.children));
    }
}
