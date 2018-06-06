import * as React from "react";

export interface ProfilProps {
    compiler: string;
    framework: string;
}

export class Profil extends React.Component<ProfilProps, {}> {
    props: any;

    render() {
        return <h1>Hello Profil !</h1>;
    }
}
