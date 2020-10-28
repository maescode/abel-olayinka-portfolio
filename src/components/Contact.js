import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <section className="portfolio-section" id="contact">
                <div className="my-5">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="contact-section-form">
                                <h3>Get in touch</h3>
                                <p>
                                    You can chat me up to discuss your project or just to say hi
                                </p>
                            </div>
                            <div className="contact-form">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <label for="name"></label>
                                        <input type="text"  placeholder="Name" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email"></label>
                                        <input type="email"  placeholder="example@email.com" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="name"></label>
                                        <textarea  placeholder="Name" className="form-control" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="submit"></label>
                                        <input type="submit"  placeholder="example@email.com" className="btn btn-outline-light px-5 mt-3"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="contact-social pt-5">
                                <h3>Let's connect</h3>
                                <p>Connect with me on social media</p>
                                <ul className="list-unstyled">
                                    <li><a href="https://github.com/maescode-bot" target="_blank"><i className="fab fa-github fa-2x"></i></a></li>
                                    <li><a href="https://twitter.com/maescode_bot" target="_blank"><i className="fab fa-twitter fa-2x"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/abel-olayinka-olagoke-0a789439" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>
                                </ul>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}

export default Contact
