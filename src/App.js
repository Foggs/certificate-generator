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
      fileUploadURL: '',
      archive: []
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
    
    this.db = firebase.database().ref().child('pdfs');
      this.db.on('value', function(snapshot) {
        let a =[];
        snapshot.forEach(function (data) {
          let postData = {
            downloadURL: data.val().downloadURL,
            title: data.val().title,
            key: data.val().key
          };
          a.push(postData);
          this.setState({archive:a})
      }.bind(this));
    }.bind(this));
  }

  componentDidMount() {
    // this.add_dbListeners();
  }

  componentWillUnmount() {
    this.db.off();
  }

  uploadToStorage(file,title) {
    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg'
    };
    var storageRef = firebase.storage().ref();
    var self = this;
    // let storageRef = storage.ref('magee/'+ title +'.pdf');
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('magee/' + title + '.pdf').put(file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
      },
      function(error) {
        switch (error.code) {
          case 'storage/unauthorized':
            console.error('User doesn not have permission to access the object');
            break;
          case 'storage/canceled':
            console.error('User canceled the upload');
            break;
          case 'storage/unknown':
            console.error('Unknown error occurred, inspect error.serverResponse');
            break;
          }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        var url = uploadTask.snapshot.downloadURL;
        
        self.update_db(url,title);
      });
  }

  update_db(downloadURL,title){
    let db = firebase.database().ref().child('pdfs');
    let newPostKey = db.push().key;
    let postData = {
      downloadURL: downloadURL,
      title: title,
      id: newPostKey
    };
    let updates = {};
    updates[newPostKey] = postData;
    this.setState({archive:this.state.archive.concat(postData)})
    return db.update(updates);
  }

  deleteFile(file) {
    alert('delete')
  }

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={ logo }
              className="App-logo"
              alt="logo" />
              <h2>Certificate Generator</h2>
            </div>
            <div className="container">
              <Login/>
              <hr/>
              <UI onFileCreated={this.uploadToStorage.bind(this)}/>
              <StorageItems archive={this.state.archive}
                            fileUpfloadedURL={this.fileUploaded}
                            deleteFile={this.deleteFile}/>
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
