import React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>[MERN] Starting Template</h1>
    <ul>
      <li><b>M</b>ongoDB</li>
      <li><b>E</b>xpress</li>
      <li><b>R</b>eact (w/Redux)</li>
      <li><b>N</b>ode</li>
    </ul>
    <h3>FRONT-END [React, Redux, Webpack]</h3>
    <ul>
      <li><a href="https://react-redux-starter-template.herokuapp.com/" target="_blank">React-Redux Starter Template</a></li>
      <ul>
        <li>Redux DevTools</li>
        <li>React Router</li>
        <li>SASS</li>
        <li><a href="https://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a></li>
        <li>
          Babel plugins:
          <ul>
            <li><a href="https://babeljs.io/docs/en/babel-plugin-transform-class-properties/" target="_blank">Class properties transform</a></li>
            <li><a href="https://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread/" target="_blank">Object rest spread transform</a></li>
          </ul>
        </li>
        <li><a href="https://jestjs.io/">Jest</a> testing</li>
      </ul>
    </ul>
    <h3>BACK-END [Node, Express, MongoDB]</h3>
    <ul>
      <li>
        MongoDB (Mongoose)
        <ul>
          <li>Databases configured for <b>development</b> + <b>testing</b></li>
        </ul>
      </li>
      <li>
        Express
        <ul>
          <li><b>Router</b> ('/api' requests on the back-end)</li>
        </ul>
      </li>
      <li>
        <a href="https://mochajs.org/">Mocha</a> testing
        <ul>
          <li>Expect</li>
          <li>Supertest</li>
        </ul>
      </li>

    </ul>
  </div>
);


export default Home;
