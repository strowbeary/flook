import * as React from "react";

export const Text = {
    heading: (props: {children: string}) => {
        return (
            <h1 className={"heading"}>{props.children}</h1>
        );
    },
    screenTitle: (props: {children: string}) => {
        return (
            <span className={"screenTitle"}>{props.children}</span>
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
    },
    label: (props: {children: string}) => {
        return (
            <span className={"label"}>{props.children}</span>
        );
    },
    signlabel: (props: {children: string}) => {
    return (
        <span className={"signlabel"}>{props.children}</span>
    );
},

};