/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './styles/style.scss';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Portfolio from './pages/portfolio';

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
