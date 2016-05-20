import Horizon from '@horizon/client';

const horizon = Horizon({ host: 'localhost:8181' });

horizon.onReady(() => document.querySelector('h1').innerHTML = 'Horizon is ready');

horizon.connect();
