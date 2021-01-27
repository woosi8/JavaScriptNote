import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';
// import reportWebVitals from './reportWebVitals';
//ReactDOM이라는 클래스안에 있는 render함수
ReactDOM.render(
  <React.StrictMode>
    {/* <App />  */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);

