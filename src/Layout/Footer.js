import React, { Component } from 'react';

class Footer extends Component{

    render() {

        var style = {
            display: "block"
        };

        var opacity = {
            opacity: 1
        };

        return (
            <div>
                <footer className="dark-bg">
                    <div className="container inner">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 inner">
                                <h4>Meet the expert</h4>
                                <div className="footer-logo">
                                <img className="logo img-intext" src="images/mj.jpg" alt="Mike Johnson" />
                                <p>Mike Johnson is the founder of RWS. He has a wide range of expertice give his business programming background and experience.   a technology consultant who loves to build and make people happy with technology.</p>
                                </div>
                                
                            </div>
                            <div className="col-md-4 col-sm-12 inner">
                                <h4>Get In Touch</h4>
                                <p>Best way to reach me is via email.</p>
                                <ul className="contacts">
                                    <li><i className="fa fa-envelope-o"></i> <a href="mailto:mike@remotewebsolutions.com">mike@remotewebsolutions.com</a></li>
                                    <li><i className="fa fa-phone"></i> (918) 289 3234</li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-12 inner">
                                <h4>Customer Satisfaction </h4>
                                <p>Our #1 priority.</p>
                            </div>
                        </div> 
                    </div>
                    <div className="footer-bottom">
                        <div className="container inner">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="copy">&copy; 2016 Remote Web Solutions. All rights reserved.</p>
                                </div>
                                
                                <div className="col-md-6">
                                    <ul className="footer-menu">
                                        <li><a href="#home" className="scroll">Home</a></li>
                                        <li><a href="#Portfolio" className="scroll">Portfolio</a></li>
                                        <li><a href="#skills" className="scroll">Skills</a></li>
                                        <li><a href="#contact" className="scroll">Contact</a></li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                        <div className="clearfix"></div>
                    </div>

                </footer>

                <a href="#" id="toTop" className={style} ><span id="toTopHover" className={opacity}></span></a>
            </div>
        );
    }
}

export default Footer;