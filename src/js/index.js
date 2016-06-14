import Horizon from '@horizon/client';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const horizon = Horizon({ host: 'localhost:8181' });
horizon.connect();

ReactDOM.render(<App horizon={horizon}/>, document.getElementById('app'));

const stat = horizon.status();
stat.subscribe(status => console.log('STATUS', status));
