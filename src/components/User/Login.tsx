import * as React from "react";
import LoginForm from './Form/LoginForm';
import { Card, Label, Elevation } from '@blueprintjs/core';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FormTitle } from '../Template/';

interface LoginProps {
}

export class Login extends React.Component<LoginProps, {}> {
    props: any;

    render() {
        return  <Container>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 4 }}>
                            <Card className="text-center" elevation={Elevation.ONE}>
                                <FormTitle content="To access your dashboard, <br />please log in :" />
                                <LoginForm />
                                <div>
                                    <Link to="/forget-password" >Forget your password ?</Link>
                                </div>
                                <div>
                                    <Link to="/register" >Not register ?</Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        ;
    }
}
