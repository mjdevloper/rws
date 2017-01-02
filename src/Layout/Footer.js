import React, { Component } from 'react';
import { Link } from 'react-router'

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
                                <h4>Meet the experts</h4>
                                <p><a href="/#/about">Click here</a> to learn about the team at RWS. Thanks to our dedicated team of experts, we're able to offer a wide range of solutions to meet the demands and expectations of your business, and the market. </p>
                            </div>
                            <div className="col-md-4 col-sm-12 inner">
                                <h4>Get In Touch</h4>
                                <p>We have a few options. </p>
                                <ul className="contacts">
                                    <li><i className="fa"></i><a href="tel:+15393024616">(539) 302-4616</a></li>
                                    <li><i className="fa"></i><a href="mailto:inquiries@remotewebsolutions.com">Email</a></li>
                                    <li><i className="fa"></i><a href="/#/contact" >Contact Form</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-12 inner">
                                <h4>Other Resources</h4>
                                <a href="/#/termsandconditions">Terms & Conditions</a>
                              
                            </div>
                        </div> 
                    </div>
                    <div className="footer-bottom">
                        <div className="container inner">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="copy">&copy; 2017 Remote Web Solutions. All rights reserved.</p>
                                </div>
                                
                                <div className="col-md-6 hidden">
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