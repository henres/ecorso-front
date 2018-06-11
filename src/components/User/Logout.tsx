import * as React from "react";

export interface LogoutProps {
    compiler: string;
    framework: string;
}

export class Logout extends React.Component<LogoutProps, {}> {
    props: any;

    render() {
        return <h1>Hello Logout !</h1>;
    }
}
