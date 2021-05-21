import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import { SocketProvider } from './common';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <SocketProvider>
            <App />
        </SocketProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
