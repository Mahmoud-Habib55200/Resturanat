import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title='Chase the new Flavour' />
      <h1 className="app__header__h1">
        The key to Fine dining
      </h1>
      <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className="custom__button">
        Explore Menue
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
