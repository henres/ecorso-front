import * as React from "react";

export interface HomePageProps { compiler: string; framework: string; }

export class HomePage extends React.Component<HomePageProps, {}> {
    props: any;

    render() {
        return <h1>Hello HomePage !</h1>;
    }
}
