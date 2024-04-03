import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './state/store';

const root = document.getElementById('root') as HTMLElement;
const rootContainer = createRoot(root);

rootContainer.render(
  <Provider store={store}>
    <App />
  </Provider>
);