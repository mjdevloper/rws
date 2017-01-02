import React, { Component } from 'react';
import Nav from '../Layout/Nav'


class About extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        var mj = {
            backgroundImage: "url(../images/mj.jpg)"
        }

        var janine = {
            backgroundImage: "url(http://placekitten.com/g/400/200)"
        }

        var clint = {
            backgroundImage: "url(http://placekitten.com/g/400/200)"
        }

        

        return (

            <div>
                <div className="focus" id="focus" >

                    <div className="container">
                        <Nav />
                        <br />
                        
                        <div className="section-header">
                            <h2 className="dark-text">RWS Leadership</h2>
                        </div>
                        

                        <div className="row">
                            <div className="col-md-4 col-sm-12 focus-box">
                                <div className="circle-avatar" style={mj}>
                                </div>
                                <h3>Mike Johnson</h3>
                                <p>Some great text about myself.</p>
                            </div>
                            <div className="col-md-4 col-sm-12 focus-box">
                                <div className="circle-avatar" style={janine}>
                                </div>
                                <h3>Janine Johnson</h3>
                                <p>You guessed it, Mik'se wife!</p>
                            </div>
                            <div className="col-md-4 col-sm-12 focus-box" >
                                <div className="circle-avatar" style={clint}>
                                </div>
                                <h3>Clint McDonnel</h3>
                                <p>SEO guru and customer relations.</p>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
