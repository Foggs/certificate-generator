import React, { Component } from 'react';
import logo from './images/FDNY_logo.svg';
import './App.css';
import Login from './Login';
import UI from './UI';
import StorageItems from './StorageItems';
// import API from jsPDF.API;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
    };
  }

    update(){
      // setState({

      // })
    }

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={ logo }
              className="App-logo"
              alt="logo" />
              <h2>Certificate Generator</h2>
            </div>
            <Login/>
            <UI/>
            <StorageItems/>
          </div>
        );
    }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;
