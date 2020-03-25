import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function Person(props) {
  return (
    <div className="box">
    <h1>{props.name}</h1>
    <p>Title: {props.title}</p>
    <p>Age: {props.age}</p>
  </div>
  );
}

const app = (
  <div>
    <Person name="Maria" title="CEO" age="29" />
    <Person name="Kati" title="developer" age="25" />
    <Person name="Karin" title="designer" age="45" />
  </div>
);


ReactDOM.render(app, document.querySelector("#root"));



