import React, { Component } from 'react';

import bart from '../../public/images/logo-bart.png';
import bluemark from '../../public/images/logo-blue-mark-energy.png';
import enviropro from '../../public/images/logo-enviro-pro.png';
import pearls from '../../public/images/logo-ipg.png';
import kirkpatrick from '../../public/images/logo-kirkpatrick-bank.png';
import medefy from '../../public/images/logo-medefy.png';
import reliant from '../../public/images/logo-reliant.png';

 class Customers extends Component {
  render() {


    return (

        <div className="container clients">
         <div className="row">

            <div className="contact" id="clients" >
		        <h3 className="heading wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">Happy Clients!</h3>
		    </div>
            <br />
            <br />
             <div className="col-lg-4 col-md-4 col-md-6">
                    <img src={bart} />
                </div>
                <div className="col-lg-4 col-md-4 col-md-6">
                     <img src={bluemark} />
                </div>
                <div className="col-lg-4 col-md-4 col-md-6">
                    <img src={enviropro} />
                </div>
            </div>
            <div className="row" >
                <div className="col-lg-4 col-md-4 col-md-6">
                    <img src={kirkpatrick} />
                </div>
                <div className="col-lg-4 col-md-4 col-md-6">
                    <img src={medefy} />
                </div>
                <div className="col-lg-4 col-md-4 col-md-6">
                    <img src={reliant} />
                </div>
            </div>
            <div className="row" >
                <div className="col-lg-4 col-md-4 col-md-6">
                    <img src={pearls} />
                </div>

            <div className="col-lg-12 col-md-12 column zerif-rtl-big-title center">

                {/*<h3 className="center">Just to name a few</h3>*/}
            </div>
            </div>
        </div>
    );
  }
}

export default Customers;
