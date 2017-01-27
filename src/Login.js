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
        console.log('not logged in');
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

      <form className="form-inline" onSubmit={this.handleSubmit}>
        <label className="sr-only" htmlFor="name">Name</label>
        <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="name" value={this.state.name} onChange={this.handleChange}/>

        <label className="sr-only" htmlFor="password">User</label>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <div className="input-group-addon">@</div>
          <input type="text" className="form-control" id="password" value={this.state.password} onChange={this.handleChange}/>
        </div>

        <div className="form-check mb-2 mr-sm-2 mb-sm-0">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default Login;
