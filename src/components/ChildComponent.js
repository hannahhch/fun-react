import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <button className = "btn btn-default" type="submit" onClick={this.props.onClick}>submit</button>
    );
  }
}
