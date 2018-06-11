import * as React from "react";
import { Card, Elevation, Button } from '@blueprintjs/core';
import { Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';

export interface LoginFormProps {
    username: string;
    password: string;
}

class LoginForm extends React.Component<LoginFormProps, {}> {
    props: any;

    render() {
        return <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Form action="">
                            <FormGroup>
                                <Input type="text" className="pt-input" id="email" placeholder="Email ..." />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" className="pt-input" id="password" placeholder="Password ..." />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" className="pt-button" id="login">Login</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
        ;
    }
}

export default LoginForm;
