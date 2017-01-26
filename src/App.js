import React, { Component } from 'react';
import * as firebase from 'firebase';

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
      data: ''
    };
  }

  componentWillMount() {
    const db = firebase.database().ref().child('pdfs');
    const dbRef = db.child('one');
    dbRef.on('value', snapshot => {
      console.log(snapshot.val);
      this.setState({
        data:snapshot.val()
      });
    });
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
