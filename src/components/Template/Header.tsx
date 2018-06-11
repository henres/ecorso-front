import * as React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Alignment, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import { Container } from 'reactstrap';

class Header extends React.Component<{}, {}> {
    public render() {
        return (
            <Container fluid>
                <Navbar>
                    <NavbarGroup align={Alignment.LEFT} >
                        <NavbarHeading>Ecorso</NavbarHeading>
                        <Link to="/" className="pt-button pt-minimal pt-icon-dashboard">Dashboard</Link>
                        <Link to="/home" className="pt-button pt-minimal pt-icon-home">Home</Link>
                        <Link to="/wallets" className="pt-button pt-minimal pt-icon-home">Wallets</Link>
                        <Link to="/transactions" className="pt-button pt-minimal pt-icon-list">Transactions</Link>
                        <Link to="/about" className="pt-button pt-minimal pt-icon-new-text-box">About</Link>
                    </NavbarGroup>
                    <NavbarGroup align={Alignment.RIGHT} >
                        <input className="pt-input" placeholder="Search files..." type="text" />
                        <Link to="/profil" className="pt-button pt-minimal pt-icon-user"></Link>
                        <Link to="/notifications" className="pt-button pt-minimal pt-icon-notifications"></Link>
                        <Link to="/settings" className="pt-button pt-minimal pt-icon-cog"></Link>
                        <Link to="/logout" className="pt-button pt-minimal pt-icon-log-out"></Link>
                    </NavbarGroup>
                </Navbar>
            </Container>
        );
    }
}

export { Header };
