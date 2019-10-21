import React, { Component } from 'react';
import poster from '../../Image/poster.jpg';
import banner from '../Banner/Banner.module.scss';
class Banner extends Component {
  render() {
    return (
      <div >
        <img className={banner.banner} src={poster}></img>
      </div>
    );
  }
}

export default Banner;