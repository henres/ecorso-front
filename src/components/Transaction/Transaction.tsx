import * as React from "react";

export interface TransactionProps { id: number; }

export class Transaction extends React.Component<TransactionProps, {}> {
    props: any;

    render() {
        return <h1>Hello Transaction !</h1>;
    }
}
