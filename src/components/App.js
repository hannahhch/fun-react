import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from '../components/BaseLayout.js';
import ChildComponent from '../components/ChildComponent.js';
import DisplayComponent from '../components/DisplayComponent.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import ParentComponent from '../components/ParentComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <Header />
          <ParentComponent>
            <ChildComponent/>
          </ParentComponent>
          <Footer />
        </BaseLayout>

      </div>
    );
  }
}

export default App;
