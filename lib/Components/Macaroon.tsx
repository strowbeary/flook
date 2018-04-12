import * as React from "react";

export interface MacaroonProps {
    value: string;
    color: string;
}

export class Macaroon extends React.Component<MacaroonProps> {

    private generateColor() {
        let hash = 50;
        for (let i = 0; i < this.props.value.length; i++) {
            hash = this.props.value.charCodeAt(i) + ((hash << 5) - hash);
        }
        const c = (hash & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();
        return "00000".substring(0, 6 - c.length) + c;
    }

    public render() {
        const accr = this.props.value.split(" ")
            .map((part) => {
                return part.charAt(0);
            })
            .join("");
        return (
            <div className={"macaroon"} style={{background: "#" + this.generateColor()}}>
                <span>{accr}</span>
            </div>
        );
    }
}