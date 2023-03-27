import React from 'react';
import menu from '../data/menu';

const MenuList = ({ type }) => {

  return (
    <div className="menu-list">{[...menu].filter(menuItem => menuItem.type === type).map((menuItem, index) => {
      return <div className="menu-item" key={index}>
        <span className="item-name">{menuItem.itemName}</span>
        <span className="price">{menuItem.price}</span>
      </div>
    })}</div>
  );
}

export default MenuList;