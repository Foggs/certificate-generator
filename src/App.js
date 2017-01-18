import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import UI from './UI';
import StorageItems from './StorageItems';

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
              <h2> Welcome to React </h2> 
            </div> 
            <p className="App-intro">
            To get started, edit <code> src / App.js </code> and save to reload. </p>
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
