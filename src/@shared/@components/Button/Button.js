import React from 'react';
import s from './Button.module.scss';

export const Button = ({ children, className, ...props }) => {
  return (
    <div className={`${s.root} ${className}`}>
      <button className={s.button}>{children}</button>
    </div>
  );
};
