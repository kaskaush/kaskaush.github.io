import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './config/store';
import smoothscroll from 'smoothscroll-polyfill';

ReactDOM.render(
    <React.StrictMode>
        <StateProvider>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

smoothscroll.polyfill();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
