import React from 'react';

import './SpecialMenu.css';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants'
const SpecialMenu = () => (
  <div className='app__specialMenue section__padding'>



    <div className="app__specialMenue__title flex__center ">
      <SubHeading title='Menue That FirstYpu Platte' />
      <h1 className='headtext__cormorant '>Today,s Special</h1>
    </div>

    <div className="app__specialMenue__menue">
      <div className="app__specialMenue__win">
        <div className="app__specialMenue__win flex__center ">
          <p className='app__specialMenue__menue__heading'>Wine & Beer</p>
          <div className="app__specialMenue__menue__items">
            {data.wines.map((win, index) => (
              <MenuItem title={win.title} price={win.price} tags={win.tags} />
            ))}
          </div>
        </div>
      </div>

      <div className="app__specialMenue__img flex__center">
        <img src={images.menu} alt="" />
      </div>

      <div className="app__specialMenue__cocktails">
        <div className="app__specialMenue__cocktails flex__center ">
          <p className='app__specialMenue__menue__heading'>Cocktails</p>
          <div className="app__specialMenue__menue__items">
            {data.cocktails.map((cocktail, index) => (

              <MenuItem title={cocktail.title} type={cocktail.index} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>


        </div>
      </div>

    </div>
    <div style={{ marginTop: '2rem' }} className='flex__center'>
      <button className='custom__button'>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
