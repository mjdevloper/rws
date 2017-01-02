import React, { Component } from 'react';
import Banner from '../Components/Banner.js';
import Portfolio from '../Components/Portfolio.js';
import Contact from '../Components/Contact.js';

import web from '../../public/images/web.png';
import apps from '../../public/images/apps.png';
import social from '../../public/images/social.png';
import analytics from '../../public/images/analytics.png';

 class Home extends Component {
   
  constructor(props) {
        super(props);
       
    }

  render() {

    
    return (

        

        <div> 
     
            <Banner />

            <div className="focus" id="focus" >

            <div className="container">


              <div className="section-header">


                <h2 className="dark-text">Solutions</h2>
                <div className="section-legend"><br /></div>
              </div>

              <div className="row">


                <div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true">


                  <div className="service-icon">


                    <a href="#"><i className="pixeden" ><img src={web} /></i></a>


                  </div>


                  <h3 className="red-border-bottom">Web Development</h3>

                  <h4>New websites</h4>
                  <h4>Custom designs</h4>
                  <h4>Wordpress</h4>
                  <h4>Website updates</h4>
                   

                </div>


                <div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true">


                  <div className="service-icon">


                    <a href="#"><i className="pixeden" ><img src={apps} /></i> </a>


                  </div>


                  <h3 className="red-border-bottom">Custom Applications</h3>
               
                    <h4>Mobile Apps</h4>
                    <h4>API Development</h4>
                    <h4>UX Development</h4>
                    <h4>Information Systems</h4>

                  

                </div>


                <div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true">


                  <div className="service-icon">


                    <a href="#"><i className="pixeden"><img src={social} /></i> </a>


                  </div>


                  <h3 className="red-border-bottom">SEO &amp; Social Media</h3>

                    <h4>Ad Words</h4>
                    <h4>Content Optimization</h4>
                    <h4>Social Media Campaigns</h4>
                    <h4>Site Traffic Analytics</h4>

                </div>


                <div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true">


                  <div className="service-icon">


                    <a href="#"><i className="pixeden"><img src={analytics} /></i> </a>


                  </div>


                  <h3 className="red-border-bottom">Data &amp; Analytics</h3>

                    <h4>Data Warehousing</h4>
                    <h4>Advanced Analytics</h4>
                    <h4>Business Intelligence</h4>
                    <h4>Machine Learning</h4>


                </div>


              </div>
<hr />
               <div className="section-header"><br />
               <br />
                <h2 className="dark-text">LETS GET STARTED TODAY!</h2><div className="section-legend"><h3>(539) 302-4616</h3></div>
                <br />
              </div>
            </div>

            </div>
      

            <section className="about-us" id="aboutus">
              <div className="container">
                <div className="section-header">
                  <h2 className="white-text">OUR MISSION</h2><div className="white-text section-legend">To be your <b>trusted</b> technology partner. </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 column zerif-rtl-big-title">
                    <div className="big-intro" data-scrollreveal="enter left after 0s over 1s" data-sr-init="true" data-sr-complete="true">Customer satisfaction is our #1 priority. </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="small-intro" data-scrollreveal="enter left after 2s over 1s" data-sr-init="true" data-sr-complete="true">We're a technology company with real people skills :) </div>

                  </div>
                  
                </div>
              </div>
            </section>

            <Contact changePageContact={ this.props.changePageContact } />
     
        </div>
    );
  }
}

export default Home;
