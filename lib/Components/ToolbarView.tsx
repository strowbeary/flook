/** @type {{search: React.CSSProperties}} */
import * as React from "react";
import {Text} from "./Text"
export interface ToolbarViewProtocol {
    title: string;
    leftView(): React.ReactElement<any>;
    rightView(): React.ReactElement<any>;
}

export class ToolbarView extends React.Component implements ToolbarViewProtocol{

    public title: string = "";
    protected name: string = this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1);

    protected style = {
        toolbar: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            background: "#f9f9fa",
            padding: "10px 20px",
            position: "sticky",
            top: 0
        } as React.CSSProperties
    };

    public leftView(): React.ReactElement<any> {
        return <span />;
    }

    public rightView(): React.ReactElement<any> {
        return <span />;
    }

    public render() {
        return (
            <div className={this.name} style={this.style.toolbar}>
                <Text.heading>{this.title}</Text.heading>
                <div>
                    {this.leftView()}
                </div>

                <div>
                    {this.rightView()}
                </div>
            </div>
        );
    }
}