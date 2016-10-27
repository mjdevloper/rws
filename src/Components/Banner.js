import React, { Component } from 'react';
import '../../public/css/slider.css';

class Banner extends Component {
  render() {
    return (
      
      <div className="content" id="home">

		<div className="wrap">
			
			<div className="header_style">	
				<div className="clearfix"></div>
			</div>

		   	<div className="slider"> 
				<div id="da-slider" className="da-slider">
					<div className="da-slide">
						<h2>Welcome!</h2>
						<p>Thanks for visiting</p>
					</div>
					<div className="da-slide">
						<h2>We're a one stop shop </h2>
                        <p>For all things web</p>
					</div>
                    <div className="da-slide">
						<h2>SEO / Marketing / E-Commerce</h2>
					    <p>We know what it takes</p>
					</div>
                    <div className="da-slide">
						<h2>Online marketing is complex</h2>
					    <p>It's too much work</p>
					</div>
                     <div className="da-slide">
						<h2>Let us help you</h2>
						<p>Maximize your ROI</p>
					</div>
                    <div className="da-slide">
						<h2>We work with you</h2>
						<p>To ensure everyone understands the game plan</p>
					</div>
                    <div className="da-slide">
						<h2>Contact Us Today</h2>
						<p>We'd be happy to answer any of your questions!</p>
						<a href="#" className="da-link"><span>CONTACT US TODAY!</span></a>
					</div>
					<nav className="da-arrows">

						<span className="da-arrows-prev"></span>
						<span className="da-arrows-next"></span>
					</nav>
				</div>

				<div className="down-arrow">
				<a href="#Portfolio" className="scroll" ><span> </span></a>
				</div>	
			</div>

		</div>
	</div>
    );
  }
}

export default Banner;
