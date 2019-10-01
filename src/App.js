import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
  //set variables
  state = {
    contacts: []
  }
  //get rest api
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  //rendering component with data from rest api
  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }
}

export default App;
