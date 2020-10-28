import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <section className="portfolio-section" id="about">
                <div className="my-5">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="about-me">
                            <article>
                                <h2>About Me </h2>
                                <div className="about-rule"></div>
                                <p>
                                    Hello! I'm Olayinka, a software engineer based in Ibadan, Oyo state, Nigeria. Who enjoys building things that lives on the internet. I develop great websites and web apps that provide intuitive, pixel-perfect user interfaces.
                                </p>
                                <p>
                                    I also provide virtual assistant service. Manage and supporte all aspects of the executive's work.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="skill-set">
                            <h3 className="off-white">Core Technologies</h3>
                            <ul>
                                <li>HTML / (S)CSS</li>
                                <li>Javascript / ES6+</li>
                                <li>Bootstrap</li>
                                <li>React Js</li>
                                <li>Git / Git Workflows </li>
                                <li>Github</li>
                                <li>Agile Methodologies</li>
                            </ul>
                            <h3 className="off-white">Others</h3>
                            <ul>
                                <li>MySql</li>
                                <li>Php / Laravel</li>
                                <li>Gatsby Js</li>
                                <li>WordPress</li>

                            </ul>
                          
                        </div>

                    </div>
                </div> 
                </div>
            </section>
        )
    }
}

export default About
