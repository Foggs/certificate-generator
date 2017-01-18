import React, { Component } from 'react';
import * as firebase from 'firebase';
    
    // query.once("value", function(snapshot) {
    //   var employees = [];
    //   snapshot.forEach(function(data) {
    //     // key will be "ada" the first time and "alan" the second time
    //     var key = data.key;
        
    //     var employee = {
    //       id: key,
    //       name: data.val().author,
    //       title: data.val().title
    //     }
    //     employees.push(employee);
    //     self.setState({employees:employees})
    //     console.log(employees);
    //   });
    // });
  

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
   
    // lsiten for authentication changes
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log(user.email, "logged in");
      } else {
        console.log('not logged in')
      }
    })

  }

  componentDidMount() {
     //for testing
    document.getElementById('name').value = 'admin@gmail.com';
    document.getElementById('password').value = 'admins';
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {    

    event.preventDefault();
    let email_val = document.getElementById('name').value;
    let password_val = document.getElementById('password').value;
    let auth = firebase.auth();
    // user authentication/login
    const promise = auth.signInWithEmailAndPassword(email_val,password_val);
    promise.catch (e => console.log(e.message));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input id="name" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          email:
          <input id="password" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}  

export default Login;
