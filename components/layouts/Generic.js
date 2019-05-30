/**
 * Layout: Generic
 *
 * PURPOSE: Basic layout for normal pages (home, about, etc) on site
 *
 * by Andrew Defee [@adefee]
 * for Rivetz, v: Etta
 * Last Updated 06.05.2019@02:10PM (1557166224)
 */
import React from "react";
import PropTypes from "prop-types";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/pro-solid-svg-icons";
import { faTimes } from "@fortawesome/pro-regular-svg-icons";
//import { fal } from '@fortawesome/pro-light-svg-icons';
import {
  faGithub,
  faDiscord,
  faYoutube,
  faTelegramPlane,
  faLinkedin,
  faMedium,
  faFlipboard,
  faFacebookF,
  faTwitter,
  faRedditAlien
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faHome,
  faTimes,
  faGithub,
  faDiscord,
  faYoutube,
  faTelegramPlane,
  faLinkedin,
  faMedium,
  faFlipboard,
  faFacebookF,
  faTwitter,
  faRedditAlien
);

import SiteHeader from "../globals/SiteHeader";
// import Footer from '../globals/Footer'
// import MobileNav from '../globals/MobileNav';

class LayoutGeneric extends React.Component {
  constructor() {
    super();
    this.state = {
      newsletterAlreadySubbed: false
    };
    this.newsletterSub = this.newsletterSub.bind(this);
  }

  newsletterSub() {
    console.log("Setting global subscription.");
    this.setState({
      newsletterAlreadySubbed: true
    });
  }

  render() {
    return (
      <div>
        <SiteHeader />
        {/* <MobileNav /> */}
        {this.props.children}
        {/* <Footer newsletterAlreadySubbed={this.state.newsletterAlreadySubbed} newsletterSub={this.newsletterSub} /> */}
      </div>
    );
  }
}

export default LayoutGeneric;
