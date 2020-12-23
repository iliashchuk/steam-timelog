import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Dropdown } from '../Dropdown/Dropdown';
import { Button } from '../Button/Button';
import s from './SearchInput.module.scss';

export const categories = [
  'HLTB',
  'Steam',
  'Custom category',
  'Custom category 2',
  'Custom category 3',
  'Custom category 4',
  'Custom category 5',
  'Custom category 6',
];

export const SearchInput = () => {
  return (
    <div className={s.root}>
      <Input placeholder="Search..." className={s.searchInput} />
      <Dropdown className={s.searchDropdown} categories={categories} />
      <Button className={s.searchButton}>Search</Button>
    </div>
  );
};
