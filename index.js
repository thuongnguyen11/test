import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App></App>
      <App></App>
      <App></App>
      <App></App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
