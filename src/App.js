//import React, { useState } from 'react'; //react hook
import React, {Component} from 'react';

 
import classes from './App.css'; //section 5 end "import classes from"
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

//otherState: this.setState.otherState


      //a way to dynamically style ouside of CSS Modules
// import styled from 'styled-components';
// const StyledButton = styled.button`
// background-color: ${props => props.alt ? 'red' : 'green'};
// color: white;
// font: inherit;
// border: 1px solid blue;
// padding: 8px;
// cursor: pointer;

// &:hover {
//   background-color: ${props => props.alt ? 'salmos' : 'lightgreen'};
//   color: black;
// }
// `;

class App extends Component {
  state = {
    persons: [
            {id: "asdasf", name: 'John', age: 24},
            {id: "gfdjfd", name: 'Maximilian', age: 28},
            {id: "terfqa", name: 'Jake', age: 26}
          ],
          otherState: 'some other value',
          showPersons: false
        }


deletePersonHandler = (personIndex) => {
 // const persons = this.state.persons.slice(); //slice makes a copy and makes code predictable
  const persons = [...this.state.persons] //ef6 way... spreads out elements into a list of elements into a new array
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

        // console.log('was clicked');
        //     //this.state.persons[0].name = 'John';   DO NOT USE THIS, IT IS WRONG
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

// alt- inside setState
// persons: [
//   {name: 'Johnathon!', age: 24},
// {name: event.target.value, age: 28},
// {name: 'Jake, or Josh?', age: 26}
// ]

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

                //using event in ()        in the html add changed={this.nameChangedHandler}
//no render with
//{/* for the hooks! */}{/* remove this.  */}{/* person={this.personsState.persons[0].name*/}{/* age={this.personsState.persons[0].age}     */}
//{/* click={this.switchNameHandler.bind(this, 'Johnny')}     */}{/* changed={this.nameChangedHandler} >My Hobbies: Racing</Person>   */}
 

render() {

let persons = null;
let btnClass = '';

if(this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
        return <Person 
          click={() => this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) =>this.nameChangedHandler(event, person.id)} />
      })}

      </div>
  );
  // style.backgroundColor = 'red';
  // style[':hover'] = {
  //     backgroundColor: 'salmon',
  //     color: 'black'
  // }; OR

  btnClass = classes.Red;
}

/* alt to the {} function
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
age={this.state.persons[2].age}  /> */


  const assignedClasses =[]; // class= "red bold"
  if (this.state.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if (this.state.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>Welcome John</p>                                                                 
       <button className={btnClass} alt={this.state.showPersons}
        onClick={this.togglePersonsHandler} >Toggle Persons</button> 
        {/* { the first way shown using ternairy
          this.state.showPersons === true ? 
          <div>
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
            age={this.state.persons[2].age}  />
      </div> : null
     } */}
     {persons}

    </div>  
      );  
};}

  
export default App;




    //default way

    //way 2
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!'));




  

