import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 24},
      {name: 'Max', age: 28},
      {name: 'Jake', age: 26}
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    //default way
    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>Welcome John</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person person={this.state.persons[0].name} age={this.state.persons[0].age} >My Hobbies: Racing</Person>
          <Person person={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person person={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>        
    );

    //way 2
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!'));
  }
}

export default App;
