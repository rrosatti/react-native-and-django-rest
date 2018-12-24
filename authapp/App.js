import React, { Component } from 'react';
import Router from './src/Router'


export default class App extends Component {

  componentWillMount() {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
    axios.defaults.timeout = 1500;
  }

  render() {
    return (
      <Router />
    );
  }
}
