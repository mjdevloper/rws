import React, { Component } from 'react';
import Axios from 'axios'
import Nav from '../Layout/Nav'
import { Modal, Button } from 'react-bootstrap';

class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', showModal: false, error: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    close = () => {
        this.setState({ showModal: false });
    }
    
    open = () => {
        this.setState({ showModal: true });
    }
    
    handleSubmit = () => {

        var self = this;

        Axios.post('http://localhost:3001/email', {
            message: self.state.value
        })
        .then(function (response) {
            self.setState({ error: false, value: ''});
            self.open();
        })
        .catch(function (error) {
            self.setState({ error: true});
            self.open();
        });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {

        var style1 = {
            width: "600px",
            height: "200px"
        };

        let Message
        if(this.state.error)
        {
            Message = <div><h4>There was an error sending your message.</h4>
                        <p>Please email or call us directly. Thanks!</p></div>
        }
        else{
            Message = <div><h4>Your message has been delivered.</h4>
                        <p>We typically follow up within a few hours.</p><br /><p>The next step is to setup a time to meet and talk about your needs more in depth.</p></div>
        }

        return (

            
            
            <div className="container" >
                <div className="row" >
                    <div className="col-md-12" >
                     <Nav />
                        <h1> Send a message</h1>
                        <br />
                        <h4> Remember to leave a phone number or email address.</h4>
                        <br />
                        
                        <div className="input-group input-group-lg" >
                            <input type="text" className="form-control" style={style1} placeholder="Your message and contact info" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <br />
                        <button className="btn btn-primary" onClick={this.handleSubmit} > Send Message </button>
                          <br />
                    <br />
                    <br />
                    </div>
                  
                </div>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Alert</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    {Message}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                    </Modal>
            </div>
        );
    }
}

export default ContactPage;