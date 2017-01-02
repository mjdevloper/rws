import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Layout/Header.js';
import Footer from './Layout/Footer.js';
import Home from './Pages/Home.js';
import Contact from './Pages/Contact.js';

import About from './Pages/About';
import './index.css';

import '../public/css/style.css';

import TermsAndConditions from './Pages/TermsAndConditions.js';

const App = React.createClass({
    getInitialState() {
        return {
            route: window.location.hash.substr(1)
        }
    },
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    },
    render() {
        let Page
        switch (this.state.route) {
            case '/about':
                Page = About;
                break;
            case '/contact':
                Page = Contact;
                break;
            case '/termsandconditions':
                Page = TermsAndConditions;
                break;
            default:
                Page = Home;
        }


        return (

            <div className="App" >

              <Header / >

              <Page />

              <Footer / >

            </div>
        )
    }
})

ReactDOM.render(<App />, document.body)
