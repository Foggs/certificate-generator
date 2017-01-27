import React, { Component } from 'react';
import * as firebase from 'firebase';
import './StorageItems.css';

class StorageItems extends Component {
    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      archive: [{
        uid: 'uid',
        url: "url",
      }],

    };
  }

  componentWillMount(){
    this.db = firebase.database().ref().child('pdfs');
          var self = this;

    this.db.once('value', function(snapshot) {
      var a =[];
      snapshot.forEach(function (data) {
          // this.setState({archive:this.state.archive.push(value)});
        var postData = {
          uid: data.val().uid,
          url: data.val.url,
        };
        a.push(postData);
        self.setState({archive:a})

      });
    });

    this.db.on('child_added', function(data) {
      // addCommentElement(postElement, data.key, data.val().text, data.val().author);
      // this.setState({
      //     numbers : this.state.numbers.concat(data.val()  )
      // })
      console.log(this,data.key, data.val().uid);
    });

    this.db.on('child_changed', function(data) {
      // setCommentValues(postElement, data.key, data.val().text, data.val().author);
      console.log(data.key, data.val().uid);
    });

    this.db.on('child_removed', function(data) {
      console.log(data.key);
      // deleteComment(postElement, data.key);
    });
  }

  handleClick(e) {
    event.preventDefault();
    // console.log(event.target);
    const target = event.target;
    this.update_db(new Date(),'data')
  }

  update_db(uid, url) {
    // A post entry.
    console.log(uid, url)
    var postData = {
      uid: uid,
      url: url,
    };

    this.db.push(postData);
    this.setState({archive:this.state.archive.concat(postData)})

    // Write the new post's data simultaneously in the posts list and the user's post list.
    // var updates = {};
    // updates['/pdfs/' + newPostKey] = postData;
    // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    // return firebase.database().ref().update(updates);
  }


  render() {
    const listItems = this.state.archive.map((item,index) =>
      <li key={item.uid} className="list-group-item">{item.url}
        <button type="button" className="btn btn-danger"  name="delete" onClick={this.handleClick}>delete</button>
        <button type="button" className="btn btn-info"  name="download" onClick={this.handleClick}>download</button>
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
