import * as React from "react"
import { Header, Footer } from './components/Template'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Classes } from '@blueprintjs/core'
import * as EcorsoComponents from './components'
import { PrivateRoute } from './PrivateRoute'
import { Container } from 'reactstrap'

// const theme = Classes.DARK;
const theme = ""

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div >
                <Header />
                <Container fluid className="main-content" style={{padding: "1em"}}>
                    <div className={theme} >
                        <Switch>
                            <Route exact path='/' component={ EcorsoComponents.HomePage }/>
                            <Route exact path='/about' component={ EcorsoComponents.About } />
                            <Route exact path='/home' component={ EcorsoComponents.HomePage }/>
                            <PrivateRoute path='/profil' component={ EcorsoComponents.User.Profil } />
                            <Route path='/login' component={ EcorsoComponents.User.Login } />
                            <Route path='/register' component={ EcorsoComponents.User.Register } />
                            <PrivateRoute path='/logout' component={ EcorsoComponents.User.Logout } />
                            <PrivateRoute path='/wallets' component={ EcorsoComponents.Wallet } />
                            <PrivateRoute path='/transactions' component={ EcorsoComponents.Transaction } />
                        </Switch>
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }
}
