import React from 'react';
import s from './ControlBar.module.scss';
import { Input } from '../../../@shared/@components/Input/Input';
import { SearchInput } from '../../../@shared/@components/SearchInput/SearchInput';

export const ControlBar = () => {
  return (
    <div className={s.root}>
      <div className={s.searchContainer}>
        {/* <Input placeholder="This is input..." /> */}
        <SearchInput />
      </div>
    </div>
  );
};
