import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './Router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';

import "./styles/style.scss";

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(
        <div style={{margin: "0 auto"}}>
          <AppRouter />
        </div>,
        rootElement
    );
} else {
    throw new Error('Could not find root element to mount to!');
}
