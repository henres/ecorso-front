import * as React from "react";
import { Card, Elevation, Button, ButtonGroup, Intent } from '@blueprintjs/core';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export interface SubscribeFormProps {
    username: string;
    password: string;
}

class SubscribeForm extends React.Component<SubscribeFormProps, {}> {
    props: any;

    render() {
        return <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Form action="">
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="text" className="pt-input" id="email" placeholder="Email ..." />
                                    <Input type="text" className="pt-input" id="email-verification" placeholder="Email verification ..." />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" className="pt-input" id="password" placeholder="Password ..." />
                                    <Input type="password" className="pt-input" id="password-verification" placeholder="Password verification ..." />
                                </Col>
                            </FormGroup>
                            <Row>
                                <Col sm="12" md={{ size: 3, offset: 7 }}>
                                    <ButtonGroup>
                                        <Button intent={ Intent.WARNING } type="button" id="reset">Reset</Button>
                                        <Button intent={ Intent.SUCCESS } type="submit" id="register">Register</Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
        ;
    }
}

export default SubscribeForm;
