import React, { Component } from 'react'
import img from '../assets/images/IMG-20201015-WA0002_1602790980131.jpg';
import img2 from '../assets/images/webpage.png'
export class Project extends Component {
    render() {
        return (
            <div className="row my-5">
                    <div className="col-md-8 col-sm-12">
                        <img src={img2}  className="w-75"/>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="featured-project my-2">
                          <div className="pt-1">
                            <h4 >Featured Project</h4>
                            <div className="project">
                                    <article>
                                       <h5 className="project-title">Portfolio V1</h5>
                                        <div className="">
                                            <p className="project-detail">
                                                My personal portfolio page
                                            </p>
                                        </div>
                                        <p className="project-technologies">
                                            HTML, CSS and React
                                        </p>
                                        <ul className="project-link">
                                            <li><a href="#"><i className="fab fa-github"></i></a></li>
                                            <li><a href="#"><i className="fab fa-codepen"></i></a></li>
                                        </ul>
                                    </article> 
                                    <hr className="bg-white" /> 
                               </div>
                            </div>
                        </div>
                    </div>
                 </div>
)
    }
}

export default Project
