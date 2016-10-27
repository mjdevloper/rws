import React, { Component } from 'react';
import Banner from '../Components/Banner.js';
import Portfolio from '../Components/Portfolio.js';
import Contact from '../Components/Contact.js';

import web from '../../public/images/web.png';
import apps from '../../public/images/apps.png';
import social from '../../public/images/social.png';
import analytics from '../../public/images/analytics.png';

 class Home extends Component {
  render() {


    return (

        <div> 
     
            <Banner />

            <div className="focus" id="focus" >

            <div className="container">


              <div className="section-header">


                <h2 className="dark-text">SOFTWARE DEVELOPMENT</h2>
                <div className="section-legend"><br /></div>
              </div>

              <div className="row">


                <div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true">


                  <div className="service-icon">


                    <a href="#"><i className="pixeden" ><img src={web} /></i></a>


                  </div>


                  <h3 className="red-border-bottom">Web Development</h3>

                  <p>Take control of your websites content using Wordpress! You’ll have a professional looking site representing your brand – as well as the tools needed to increase online productivity, like e-commerce. Wordpress makes it easy. </p>

                </div>


                <div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true">


                  <div className="service-icon">


                    <a href="#"><i className="pixeden" ><img src={apps} /></i> </a>


                  </div>


                  <h3 className="red-border-bottom">Custom Apps</h3>

                  <p>We have built several custom applications over the years – so our experience is deep and diverse. Some examples include: CRM apps, personnel management, inventory management, resource scheduling, time keeping, fundraising applications, payment gateways and custom APIs. </p>

                </div>


                <div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true">


                  <div className="service-icon">


                    <a href="#"><i className="pixeden"><img src={social} /></i> </a>


                  </div>


                  <h3 className="red-border-bottom">Social Media &amp; Marketing</h3>

                  <p>Having a website site good, but driving traffic to your website is even better. The best way to drive traffic to your site is to be active in social media outlets and proper advertising. We have the experts that are ready to build and execute a marketing strategy for your business to maximize revenue and ROI on technology. </p>

                </div>


                <div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true">


                  <div className="service-icon">


                    <a href="#"><i className="pixeden"><img src={analytics} /></i> </a>


                  </div>


                  <h3 className="red-border-bottom">Data &amp; Analytics</h3>

                  <p>Are you taking advantage of the cloud? Storage has never been cheaper and there are real cost savings using cloud computing. As a Microsoft partner we’re ready to implement the wide array of cloud and data analysis solutions they provide. This is the future for all information systems. </p>

                </div>


              </div>

               <div className="section-header"><br />
                <h2 className="dark-text">CALL TODAY!</h2><div className="section-legend"><h3>918-289-3234</h3></div>
              </div>
            </div>

            </div>
      

            <section className="about-us" id="aboutus">
              <div className="container">
                <div className="section-header">
                  <h2 className="white-text">OUR MISSION</h2><div className="white-text section-legend">To be your trusted technology partner. </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 column zerif-rtl-big-title">
                    <div className="big-intro" data-scrollreveal="enter left after 0s over 1s" data-sr-init="true" data-sr-complete="true">Customer satisfaction is the #1 priority. </div>
                  </div>
                   <div className="col-lg-6 col-md-6 column zerif-rtl-big-title">
                    
                  </div>
                </div>
              </div>
            </section>

            <Portfolio />

            <Contact />
     
        </div>
    );
  }
}

export default Home;
