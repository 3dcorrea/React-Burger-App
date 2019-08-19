import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Dan', age: 33 },
      { name: 'Bob', age: 40 },
      { name: 'Bill', age: 12 }
    ]
  });

  const [otherState, setOtherState] = useState('something else');
  
  console.log(personsState, otherState);

  const switchNameHandler = () => {
  // console.log('Was clicked!');
  //  DONT DO THIS // this.state.persons[0].name = "Daniel";
  this.setState({
   persons: [
    {name: newName, age: 33 },
    {name: 'Bob', age: 40 },
    {name: 'Bill', age: 24 }
    ],
  })}

  return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Daniel')} >
          Switch Name
        </button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dan!!'} >My Hobbies: Chilling</Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
  );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }


export default app;