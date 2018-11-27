import React, { Component } from 'react';
import './App.css';
import Main from './main/main.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import './css/design.scss';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
