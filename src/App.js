import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default class App extends Component {
     
    render() {
        return (
            <div>
               <Nav/> 
               <div className="container">
                <Header />
                <Main />
                <Contact />
               </div>
               <Footer />
            </div>
        )
    }
}