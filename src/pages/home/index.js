import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/iconfont/iconfont.css';
import '@/iconfont/iconfont.js';
import '@/style/common.css'
import App from '@home/App.js';
import ErrorBoundary from '@home/components/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('container'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
