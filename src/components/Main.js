import React, { Component } from 'react'
import About from './About';
import Projects from './Projects';

export class Main extends Component {
    render() {
        return (
            <div>
               <About />
               <Projects />
            </div>
        )
    }
}

export default Main
