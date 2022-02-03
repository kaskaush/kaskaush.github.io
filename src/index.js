import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './config/store';
import ReactGA from 'react-ga';

ReactDOM.render(
    <React.StrictMode>
        <StateProvider>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

ReactGA.initialize('UA-209775934-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();