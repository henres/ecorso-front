import * as React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

export const Footer: React.StatelessComponent<{}> = () => {
    return (
        <footer className="footer blue">
            <Container fluid >
                <Row className="text-center">
                    <Col sm="12">
                        <div className="footer-copyright text-center py-3">© 2018 Copyright:
                            <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
