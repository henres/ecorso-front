import * as React from "react";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import { Card, Elevation } from "@blueprintjs/core";
import RegisterForm from "./Form/RegisterForm";

export interface RegisterProps {
    compiler: string;
    framework: string;
}

export class Register extends React.Component<RegisterProps, {}> {
    props: any;

    render() {
        return  <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Card className="text-center" elevation={Elevation.ONE}>
                                <h4 style={{"padding": "20px"}}>Please register to use Ecorso</h4>
                                <RegisterForm />
                            </Card>
                        </Col>
                    </Row>
                </Container>
        ;
    }
}
