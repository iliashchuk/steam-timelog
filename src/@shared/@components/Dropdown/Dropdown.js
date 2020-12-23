import React, { useState } from 'react';
import s from './Dropdown.module.scss';
import expandIcon from '../../@images/expand-icon.png';

export const Dropdown = ({ className, categories, ...props }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const hideDropdown = () => {
    setDropdownActive(false);
  };
  const selectItem = e => {
    setSelectedCategory(e.target.id);
    hideDropdown();
  };
  const changeListActivity = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className={`${s.root} ${className}  ${dropdownActive && s.active}`} onBlur={hideDropdown} tabIndex="0">
      <div className={s.toggleButton} onClick={changeListActivity}>
        {selectedCategory}
        <div className={s.arrowContainer}>
          <img src={expandIcon} alt="" />
        </div>
      </div>
      <div className={s.list}>
        {categories.map(category => (
          <div
            className={`${s.item} ${category === selectedCategory ? s.activeItem : ''}`}
            key={category}
            id={category}
            onClick={selectItem}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};
