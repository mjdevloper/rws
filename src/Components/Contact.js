import React, { Component } from 'react';
import Helper from 'sendgrid'

class Contact extends Component {


  render() {

    var divStyle = {
        textAlign: 'center'
    };
    
    return (

        <div className="contact" id="contact" >
		    <h3 className="heading wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">We're ready to get moving!</h3>
			  <br />
            <div className="col-md-8 col-md-offset-2" style={ divStyle }>
                <h1>Call today, or <a className="mailto" href="/#/contact" onClick={ this.props.changePageContact }> click here to contact us. </a></h1>
                <br />
                <h1><a href="tel:+15393024616">(539) 302-4616</a></h1>
                <br />
            </div>

	 	    <div className="clearfix"></div>
		</div>
    );
  }
}

export default Contact;
