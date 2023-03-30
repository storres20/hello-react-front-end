import React from 'react';
import ReactDOM from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
);
