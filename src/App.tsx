import React, { Component, useState  } from 'react';
// import Log from './Trainning/DAY1';
// import Mounting from './Trainning/DAY2';
import {Toggle} from './Trainning/DAY3';

class App extends Component<{}, { [key: string]: Boolean }> {
  constructor(props: boolean){
    super(props)
    this.state = {isLogIn: true}
    this.buttonToggle = this.buttonToggle.bind(this)
  }

  buttonToggle() {
    this.setState(prev => ({isLogIn: !prev.isLogIn}))
  }

  render() {

    const check = this.state.isLogIn
    let button
    check ? button = <Toggle onClick = {this.buttonToggle}>login</Toggle> : button = <Toggle onClick = {this.buttonToggle}>Log out</Toggle>
    return (
      <div className='App'>
        {button}
      </div>
    );
  }
}

export default App;
