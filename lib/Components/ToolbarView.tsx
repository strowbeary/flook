/** @type {{search: React.CSSProperties}} */
import * as React from "react";

export interface ToolbarViewProtocol {
    title: string;
    leftAction(): React.ReactElement<any>;
    rightAction(): React.ReactElement<any>;
}

export class ToolbarView extends React.Component implements ToolbarViewProtocol{

    title: string = "";
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

    leftAction(): React.ReactElement<any> {
        return <span />;
    }

    rightAction(): React.ReactElement<any> {
        return <span />;
    }

    render() {
        return (
            <div className={this.name} style={this.style.toolbar}>
                <h1>{this.title}</h1>
                <div>
                    {this.leftAction()}
                </div>

                <div>
                    {this.rightAction()}
                </div>
            </div>
        );
    }
}