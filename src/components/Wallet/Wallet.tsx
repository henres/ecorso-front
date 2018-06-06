import * as React from "react";

export interface WalletProps { id: number; }

export class Wallet extends React.Component<WalletProps, {}> {
    props: any;

    render() {
        return <h1>Hello Wallet !</h1>;
    }
}
