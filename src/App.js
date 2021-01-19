//import React, { useState } from 'react'; //react hook
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

//
// const app = props => {
//   const [personsState, setPersonsState] = useState({ //useState hook
  //     persons: [
  //       {name: 'John', age: 24},
  //       {name: 'Max', age: 28},
  //       {name: 'Jake', age: 26}
  //     ],
  //     otherState: 'some other value'
  // });



 // const [otherState, setOtherState] = useState( 'some other value'); //useState hook

  //console.log(personsState, otherState); //useState hook

  //const switchNameHandler = (newName) => { //useState hook
//     // console.log('Was clicked!');

//     setPersonsState( {
//       persons: [
//         {name: newName, age: 24},
//       {name: 'Maximilian', age: 28},
//       {name: 'Jake, not Josh', age: 26}
//     ],
//     otherState: personsState.otherState
//   })
// };//useState hook


class app extends Component {
  state = {
    persons: [
              {name: 'John', age: 24},
            {name: 'Maximilian', age: 28},
            {name: 'Jake, not Josh', age: 26}
          ],
          otherState: this.setState.otherState
        }

switchNameHandler = (event) => {
  this.setState = ( {
    persons: [
              {name: 'Max', age: 24},
            {name: 'Maximilian', age: 28},
            {name: 'Jake, not Josh', age: 26}
          ]
        } )
      }

  // console.log('was clicked');
  //     //this.state.persons[0].name = 'John';   DO NOT USE THIS, IT IS WRONG
 nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      {name: 'Johnathon!', age: 24},
    {name: event.target.value, age: 28},
    {name: 'Jake', age: 26}
    ]
  });
}


//using event in ()        in the html add changed={this.nameChangedHandler}

//no render with
//{/* for the hooks! */}{/* remove this.  */}{/* person={this.personsState.persons[0].name*/}{/* age={this.personsState.persons[0].age}     */}
//{/* click={this.switchNameHandler.bind(this, 'Johnny')}     */}{/* changed={this.nameChangedHandler} >My Hobbies: Racing</Person>   */}
  


render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Welcome John</p>                                                                 
       <button
        style={style}
        onClick={() => this.switchNameHandler('John King!')}
        >Switch Name</button> 
      <Person 
        person={this.state.persons[0].name}                                        
        age={this.state.persons[0].age}                                           
        click={this.switchNameHandler.bind(this, 'Johnny')}                              
        changed={this.nameChangedHandler} >My Hobbies: Racing</Person>                   
      <Person 
        person={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler}  />
      <Person 
        person={this.state.persons[2].name} 
        age={this.state.persons[2].age} 
        click={this.switchNameHandler}  />
    </div>        
);
  
};}

  
export default app;




    //default way

    //way 2
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!'));




  

