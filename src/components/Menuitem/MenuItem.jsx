import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__itemMenue__container'>
    <div className="app__itemsMenue">
      <p>{title}</p>
      <div />
      <span>{price}</span>
    </div>
    <div>
      <p>
        {tags}
      </p>
    </div>

  </div>
);

export default MenuItem;
