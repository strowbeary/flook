/** @type {{search: React.CSSProperties}} */
import * as React from "react";
export interface ToolbarViewProps {
    className: string;
}

export class ToolbarView extends React.Component<ToolbarViewProps> {


    public render() {
        return (
            <div className={`toolbar`}>
                {this.props.children}
            </div>
        );
    }
}