import * as React from "react";

export const Text = {
    heading: (props: {children: string}) => {
        return (
            <h1 className={"heading"}>{props.children}</h1>
        );
    },
    sectionTitle: (props: {children: string}) => {
        return (
            <span className={"sectionTitle"}>{props.children}</span>
        );
    },
    emphasis: (props: {children: string}) => {
        return (
            <span className={"emphasis"}>{props.children}</span>
        );
    },
    body: (props: {children: string}) => {
        return (
            <p className={"body"}>{props.children}</p>
        );
    }

};