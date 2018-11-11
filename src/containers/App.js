import React, { Component } from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import OurApps from '../components/OurApps';
import OurTeam from '../components/OurTeam';
import Contact from '../components/Contact';
import FeaturedProject from '../components/FeaturedProject';
import Footer from '../components/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <AboutUs />
        <FeaturedProject />
        <OurApps />
        <OurTeam />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
