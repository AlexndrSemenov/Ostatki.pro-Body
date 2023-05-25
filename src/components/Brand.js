import React from 'react';

const Brand = ({ brand, supply, type }) => {
    
  return (
    <li className='product__brands_cell'>
      <div className='product__brands_checkbox'/>
      <p className='product__brands_checkbox_title'>{brand || supply || type}</p>
    </li>
  );
};

export default Brand;
