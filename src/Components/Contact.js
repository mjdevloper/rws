import React, { Component } from 'react';

class Contact extends Component {


  render() {

    var divStyle = {
        textAlign: 'center'
    };
    
    return (

        <div className="contact" id="contact" >
		    <h3 className="heading wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">HAVE AN INTERESTING PROJECT?</h3>
			
            <div className="col-md-8 col-md-offset-2" style={ divStyle }>
                <h1>Call Us Today!</h1>
                <br />
                <br />
                <br />
            </div>

	 	    <div className="clearfix"></div>
		</div>
    );
  }
}

export default Contact;
