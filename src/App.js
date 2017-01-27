import React, { Component } from 'react';
import logo from './images/FDNY_logo.svg';
import './App.css';
import Login from './Login';
import UI from './UI';
import StorageItems from './StorageItems';
import * as firebase from 'firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
      data: ''
    };
  }

  componentWillMount(){
    const config = {
        apiKey: "AIzaSyCnwAuNsDPbTdwHWBD1DaDkLEy8RqH6U4c",
        authDomain: "news-98d26.firebaseapp.com",
        databaseURL: "https://news-98d26.firebaseio.com",
        storageBucket: "news-98d26.appspot.com",
        messagingSenderId: "692400871451"
      };
      firebase.initializeApp(config);
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
              <h2>{this.state.data}</h2>
            </div>
            <div className="container">
              <Login/>
              <UI/>
              <StorageItems/>
            </div>
          </div>
        );
    }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;
