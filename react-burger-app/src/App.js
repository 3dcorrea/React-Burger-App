import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "superDan",
  };

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  };
  
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Dan" />
      </div>
    );
  };
};

export default App;