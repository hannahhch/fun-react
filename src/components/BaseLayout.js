import React, { Component } from 'react';
import ChildComponent from '../components/ChildComponent.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


export default class BaseLayout extends Component {
  render() {
    return (
      <div>
    <Header />
    <ChildComponent />
    <div>This should house Header and Footer components and be able to house any children components.</div>

    <Footer />
  </div>
);
  }
}
