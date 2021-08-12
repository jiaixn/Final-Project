import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {RoomProvider} from './Context';

ReactDOM.render(
  /* wrap everything into provider so that all the components can read the data from context*/
  <RoomProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RoomProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
