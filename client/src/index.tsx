import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

import 'antd/dist/antd.css';
import 'react-credit-cards/es/styles-compiled.css';

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyles/>
  </React.Fragment>,
  document.getElementById('root')
);
