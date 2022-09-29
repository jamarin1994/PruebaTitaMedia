import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Posts from './posts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <App/>
    <Posts/>
  </Fragment>
);