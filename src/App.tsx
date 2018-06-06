import * as React from "react";
import { Header, Footer, Sidebar } from './components/Template';
import {Route, Switch} from 'react-router-dom';
import {HomePage, About, Profil, Wallet, Transaction} from './components';

interface IProps { name: string; }

export class App extends React.Component<IProps, {}> {
    render() {
        return (
            <div>
                <Header />
                <div className="main-content" style={{padding: "1em"}}>
                    <div className="workspace">
                        <Sidebar />
                        <Switch>
                            <Route path='/profil' component={ Profil } />
                            <Route path='/wallets' component={ Wallet } />
                            <Route path='/transcations' component={ Transaction } />
                            <Route exact path='/home' component={ HomePage }/>
                            <Route exact path='/about' component={ About } />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}