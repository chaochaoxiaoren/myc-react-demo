import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/iconfont/iconfont.css';
import '@/iconfont/iconfont.js';
import '@/style/common.css'
import App from '@trade/App.js';
import store from './container/store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('container'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
