import React, { Component } from 'react';
import img from '../assets/images/IMG-20201015-WA0002_1602790980131.jpg'

export class Header extends Component {
    render() {
        return (
            <section className="portfolio-section" id="header">
                <header>
                    <div className="my-5">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="header-text">
                                    <article>
                                        <span className="salute offwhite">Hi, I'm</span>
                                            <h1 className="">Abel Olayinka</h1>
                                            <h1 className="">I build things for the web.</h1>
                                            <p className="offwhite"> I'm a software engineer based in Ibadan, Oyo state, Nigeria. I specialize in building exceptional, high-quality websites and applications.</p>
                                            <a href="#contact" className="btn btn-outline-warning py-3 px-5 mb-5 mt-3">
                                                Get in touch
                                            </a>
                                    </article>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="header-image">
                                    <div className="image-container">
                                      <img src={img} alt="Olagoke Abel Olayinka" className="mt-sm-5 w-100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             </header>
        </section>
           
        )
    }
}

export default Header
