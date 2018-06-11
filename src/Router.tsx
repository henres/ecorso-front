import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {App} from './App';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb: any) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb: any) {
        this.isAuthenticated = false
        setTimeout(cb, 100) // fake async
    }
}

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    );
}