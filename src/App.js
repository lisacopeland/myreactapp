import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

class App extends Component {

  // State is a special attribute available to any class which extends Component
  // This is where you store any special variables related to the 'state' of 
  // the component
  state = {
    persons: [
      { name: 'Lisa', age: 24 },
      { name: 'Bruce', age: 45},
      { name: 'Maggy', age: 3}
    ]
  }

  // This is a event handler used by the button click
  // It uses the special 'setstate' function to change 
  // the state of the app - two things affect the rendering
  // of the DOM - props and state
  switchNameHandler = (newName) => {
    console.log('Button was clicked');
    this.setState( { persons: 
      [{ name: newName, age: 24 },
      { name: 'Bruce', age: 45},
      { name: 'Maggy McGee', age: 4}]} );
  }

  // event is implicitly passed to the handler because it is called by
  // the 'onChange' event
  nameChangedHandler = (event) => {
    this.setState( { persons: 
      [{ name: event.target.value, age: 24 },
      { name: 'Bruce', age: 45},
      { name: 'Maggy McGee', age: 4}]} );
  }

  // The button has one way of binding the click handler
  // The second person component shows the other way
  // When you call the click handler in the Person component
  // It is bound to 'click' so that is what you call 
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
          <p> I am a react app!</p>
          <button 
              style={style} 
              onClick={() => this.switchNameHandler('Orange Kitty')} >Switch Name</button>
          <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              changed={this.nameChangedHandler}/>
          <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} 
              click={this.switchNameHandler.bind(this, 'Stuart')}
              changed={this.nameChangedHandler}
              >My hobbies: tennis ball
          </Person>
          <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              changed={this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;
