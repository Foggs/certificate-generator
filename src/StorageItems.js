import React, { Component } from 'react';
import * as firebase from 'firebase';
import './StorageItems.css';

class StorageItems extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);

    this.state = {
      archive: [],
    };
  }

  handleClick(param) {
    console.log(param.downloadURL,'delete clicked');
    // Create a reference to the file we want to download
    var storage = firebase.storage();
    var starsRef = storage.ref('magee/' + param.title +'.pdf');
    // Get the download URL
    starsRef.getDownloadURL().then(function(url) {
      // Insert url into an <img> tag to "download"
      var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
    }).catch(function(error) {
      switch (error.code) {
        case 'storage/object_not_found':
          console.log("File doesn't exist");
          break;

        case 'storage/unauthorized':
          console.log("User doesn't have permission to access the object");
          break;

        case 'storage/canceled':
          console.log("User canceled the upload");
          break;

        case 'storage/unknown':
          console.log("Unknown error occurred, inspect the server response");
          break;
      }
    });
  }

  render() {
    var ListItem = React.createClass({
      render() {
        return (
          <li className="list-group-item">
            {this.props.item.title}
            <button type="button"
                    disabled="disabled" 
                    className="btn btn-danger btn-sm"
                    onClick={this._onClick}>{'delete'}

            </button>
            <button type="button" 
                    disabled="disabled"
                    className="btn btn-info btn-sm">{'download'}
            </button>
          </li>
        );
      },
      _onClick() {
        this.props.onItemClick(this.props.item);
      }
    });
    
    return (
      <div className="StorageItems">
        <h2> Archive </h2>
        <ul className="list-group">
        {this.props.archive.map(item =>
          <ListItem key={item.id} item={item} onItemClick={this.handleClick} />
        )}
        </ul>
      </div>
    );
  }
}

export default StorageItems;
