import React, { Component } from 'react';
import './StorageItems.css';

class StorageItems extends Component {
    constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
    };
  }

  render() {
      return (
        <div className="StorageItems">
          <h2> StorageItems: List </h2>            
        </div>
      );
  }
}

export default StorageItems;
