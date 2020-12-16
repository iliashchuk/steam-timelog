import React from 'react';
import s from './Input.module.scss';

export const Input = props => {
  return (
    <div className={s.root}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type="text" name={props.name} value={props.value} onChange={props.handleChange}></input>
    </div>
  );
};
