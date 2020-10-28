import React, { Component } from 'react';
import Project from './Project';

export class Projects extends Component {
    render() {
        return (
            <section className="portfolio-section">
                <div className="my-5">
                   <div className="row">
                     <div className="col">
                        <div className="project-section-heading">
                            <h2>Recent Projects</h2>  
                            <div className="about-rule"></div>
                        </div>
                     </div>
                  </div>
                  <Project />  
                  <Project />
                  <Project />                
                </div>
            </section>
        )
    }
}

export default Projects
