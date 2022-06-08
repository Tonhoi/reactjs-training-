import React, { Component } from 'react';
import {Toggle} from './Toggle';

class HandleInput extends Component<{}, { [key: string]: Boolean }> {
    constructor(props: boolean){
        super(props)
        this.state = {isLogIn: true}
        this.buttonToggle = this.buttonToggle.bind(this)
    }
    buttonToggle() {
        this.setState(prev => ({isLogIn: !prev.isLogIn}))
    }
    render() {
        const check = this.state.isLogIn;
        let button;
        check ? button = <Toggle onClick = {this.buttonToggle}>login</Toggle> : button = <Toggle onClick = {this.buttonToggle}>Log out</Toggle>;
        return (
            <div>
                {button}
            </div>
        );
    }
}

export default HandleInput;