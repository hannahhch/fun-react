import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className = "baselayout">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
