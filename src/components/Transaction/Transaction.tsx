import * as React from "react";
import { Container, Col, Row } from "reactstrap";
import { Sidebar } from './Sidebar';
import TransactionList from "./TransactionList";
import TransactionStore from "../../services/memory/Transaction/TransactionStore";

export interface TransactionProps { id: number; }

export class Transaction extends React.Component<TransactionProps, {}> {
    props: any;

    render() {
        const transactionStore = new TransactionStore();
        return <Container fluid>
                    <Row>
                        <Col sm="2">
                            <Sidebar />
                        </Col>
                        <Col sm="10">
                            <TransactionList transactions={transactionStore.findAll().toArray()}/>
                        </Col>
                    </Row>
                </Container>;
    }
}
