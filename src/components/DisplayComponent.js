import React, { Component } from 'react';


export default class DisplayComponent extends Component {
  render() {
    return (
      <div className = "displayed-text">{this.props.sayWhat}</div>
    );
  }
}
