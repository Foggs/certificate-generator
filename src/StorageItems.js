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
