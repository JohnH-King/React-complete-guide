import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const app = props => {
  const [personsState, setPersonsState] = useState({
      persons: [
        {name: 'John', age: 24},
        {name: 'Max', age: 28},
        {name: 'Jake', age: 26}
      ],
      otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState( 'some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    //this.state.persons[0].name = 'John';   DO NOT USE THIS, IT IS WRONG
    setPersonsState( {
      persons: [
        {name: 'John King', age: 24},
      {name: 'Maximilian', age: 28},
      {name: 'Jake, not Josh', age: 26}
    ],
    otherState: personsState.otherState
  });
}; 

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Welcome John</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
      person={personsState.persons[0].name} age={personsState.persons[0].age} >My Hobbies: Racing</Person>
      <Person person={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person person={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>        
);

  

  




    //default way

    //way 2
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!'));




  }

export default app;
