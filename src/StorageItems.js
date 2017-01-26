import React, { Component } from 'react';
import * as firebase from 'firebase';

import './StorageItems.css';

class StorageItems extends Component {
    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
    };
  }

  componentwillMount(){
    const config = {
        apiKey: "AIzaSyCnwAuNsDPbTdwHWBD1DaDkLEy8RqH6U4c",
        authDomain: "news-98d26.firebaseapp.com",
        databaseURL: "https://news-98d26.firebaseio.com",
        storageBucket: "news-98d26.appspot.com",
        messagingSenderId: "692400871451"
      };
      firebase.initializeApp(config);
  }

  handleClick(e) {
    event.preventDefault();
    // console.log(event.target);
    const target = event.target;
  }

  render() {
    const numbers = ['www.google.com', 'www.yahoo.com', 'www.cney.com', 'www.google.com', 'www.google.com'];
    const listItems = numbers.map((number,index) =>
      <li key={index} className="list-group-item">{number}
        <button type="button" className="btn btn-danger"  onClick={this.handleClick}>delete</button>
        <button type="button" className="btn btn-info"  onClick={this.handleClick}>download</button>
      </li>
    );
      return (
        <div className="StorageItems">
          <h2> StorageItems: List </h2>
          <ul className="list-group">
            {listItems}
          </ul>
        </div>
      );
  }
}

export default StorageItems;
