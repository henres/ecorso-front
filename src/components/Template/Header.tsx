import * as React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <nav className="pt-navbar .modifier">
                    <div className="pt-navbar-group pt-align-left" >
                        <Link to="/" className="pt-button pt-minimal pt-icon-dashboard">Dashboard</Link>
                        <Link to="/home" className="pt-button pt-minimal pt-icon-home">Home</Link>
                        <Link className="pt-button pt-minimal pt-icon-home" to="/wallets">Wallets</Link>
                        <Link to="/transactions" className="pt-button pt-minimal pt-icon-list">Transactions</Link>
                    </div>
                    <div className="pt-navbar-group pt-align-right" >
                        <Link to="/profil" className="pt-button pt-minimal pt-icon-account">Profil</Link>
                        <Link to="/logout" className="pt-button pt-minimal pt-icon-log-out">Logout</Link>
                        <Link to="/about" className="pt-button pt-minimal pt-icon-new-text-box">About</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export { Header };