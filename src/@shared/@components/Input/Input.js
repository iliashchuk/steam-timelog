import React from 'react';
import s from './Input.module.scss';

export const Input = ({ name, label, className, ...props }) => {
  return (
    <div className={`${s.root} ${className}`}>
      <label className={s.label} htmlFor={name}>
        {label}
      </label>
      <input className={s.input} {...props}></input>
    </div>
  );
};
