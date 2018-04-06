/** @type {{search: React.CSSProperties}} */
import * as React from "react";

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
            textAlign: "left",
            fontSize: "14pt",
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
                <h1>{this.title}</h1>
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