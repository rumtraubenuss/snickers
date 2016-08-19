import Horizon from '@horizon/client';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Connector as HorizonConnector } from 'horizon-react';
import { createStore } from 'redux';

const horizon = Horizon({ host: 'localhost:8181' });
horizon.connect();

const store = createStore(() => {});

ReactDOM.render(
  <HorizonConnector store={store} horizon={horizon}>
    <App />
  </HorizonConnector>,
  document.getElementById('app')
);

const stat = horizon.status();
stat.subscribe(status => console.log('STATUS', status));
