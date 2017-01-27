import React, { Component } from 'react';
import * as firebase from 'firebase';
import './StorageItems.css';

class StorageItems extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      archive: [],

    };
  }

  componentWillMount(){
    this.db = firebase.database().ref().child('pdfs');
    let self = this;
    this.add_dbListeners();

    this.db.once('value', function(snapshot) {
      let a =[];
      snapshot.forEach(function (data) {
        let postData = {
          uid: data.val().uid,
          url: data.val.url,
        };
        a.push(postData);
        self.setState({archive:a})
      });
    });
  }

  add_dbListeners(){
    this.db.on('child_added', function(data) {
      // addCommentElement(postElement, data.key, data.val().text, data.val().author);
      // this.setState({
      //     numbers : this.state.numbers.concat(data.val()  )
      // })
      // console.log(data.key, data.val().uid);
    });

    this.db.on('child_changed', function(data) {
      // setCommentValues(postElement, data.key, data.val().text, data.val().author);
      // console.log(data.key, data.val().uid);
    });

    this.db.on('child_removed', function(data) {
      // console.log(data.key);
      // deleteComment(postElement, data.key);
    });
  }

  create() {

  }

  read() {

  }

  update(uid, url) {
    // A post entry.
    console.log(uid, url);
    let postData = {
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

  destroy() {

  }

  handleClick(e) {
    event.preventDefault();
    let target = event.target;
    let timestamp = new Date();
    this.update(timestamp,'data');
  }

  render() {
    const listItems = this.state.archive.map((item,index) =>
      <li key={index} className="list-group-item">{item.url}
        <button type="button" className="btn btn-danger btn-sm" name="delete" onClick={this.handleClick}>delete</button>
        <button type="button" className="btn btn-info btn-sm" name="download" onClick={this.handleClick}>download</button>
      </li>
    );
    return (
      <div className="StorageItems">
        <h2> Archive </h2>
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default StorageItems;
