import * as React from "react";

export interface AboutProps { text: string; }

export class About extends React.Component<AboutProps, {}> {
    props: any;

    render() {
        return <h1>Hello About {this.props.text} !</h1>;
    }
}
