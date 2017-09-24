import React, { Component } from 'react';
import ChildComponent from '../components/ChildComponent.js';
import DisplayComponent from '../components/DisplayComponent.js';

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
        <div className = "form-group">
          <form action = "">
          <input onChange={this.handleInput} type="text" placeholder="Send a message!" autoFocus className = "form-control" value = {this.state.whatToSay} />
          <ChildComponent onClick={this.handleSubmit}/>
        </form>
        <DisplayComponent sayWhat={this.state.whatWasSaid} />
      </div>
    );
  }
}
