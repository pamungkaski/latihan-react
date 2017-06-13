import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';
import { fireconfig } from './environments/firebase.config';

firebase.initializeApp(fireconfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
