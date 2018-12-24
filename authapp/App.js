import React, { Component } from 'react';
import Router from './src/Router'
import axios from 'axios';


export default class App extends Component {

  componentWillMount() {
    // use your local IP address here (the same you use when running the server)
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
    axios.defaults.timeout = 1500;
  }

  render() {
    return (
      <Router />
    );
  }
}
