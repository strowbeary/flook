import * as React from "react";

export interface ImageViewProps {
    style: React.CSSProperties;
    image: string;
    alt: string;
}

export class ImageView extends React.Component<ImageViewProps> {
    private styles = {
        cover: Object.assign({
            backgroundSize: "cover",
            backgroundImage: `url(${this.props.image})`,
            backgroundPosition: "center"
        }, this.props.style)
    };

    public render() {
        return <div style={this.styles.cover}>{this.props.children}</div>;
    }
}