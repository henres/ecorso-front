import * as React from 'react'
import { Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';

export interface HomePageProps { compiler: string; framework: string; }

export class HomePage extends React.Component<HomePageProps, {}> {
    props: any;

    render() {
        return <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <h2>Welcome to our application Ecorso !</h2>
                The meaning of this application is to let you manage your asset from everywhere. Like you want. <br/>
                We don't need to connect to your bank account to work. <br/>
                You can import csv or pdf to begin or add all manually.
            </Col>
        </Row>;
    }
}
