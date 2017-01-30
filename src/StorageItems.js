import React, { Component } from 'react';
import './StorageItems.css';

class StorageItems extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      archive: [],
    };
  }

  handleClick(e) {

    event.preventDefault();
    let target = 'e.target.name';
    if(target === 'delete'){
      console.log('delete clicked');
    }
    if(target === 'download'){
      console.log('download clicked')
    }
  }

  render() {
    const ListItems = this.props.archive.map((item,index) =>
      <li key={item.key} className="list-group-item">{item.title}.pdf
        <button type="button" className="btn btn-danger btn-sm" name="delete" onClick={this.handleClick}>delete</button>
        <button type="button" className="btn btn-info btn-sm" name="download" onClick={this.handleClick}>download</button>
      </li>
    );
    return (
      <div className="StorageItems">
        <h2> Archive </h2>
        <ul className="list-group">
        {ListItems}
        </ul>
      </div>
    );
  }
}

export default StorageItems;
