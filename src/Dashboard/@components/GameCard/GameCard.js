import React from 'react';
import s from './GameCard.module.scss';

export const GameCard = ({ game }) => {
  return (
    <div className={s.gameCard}>
      <img src={game.imageUrl} alt={game.name} />
      <span>{game.name}</span>
    </div>
  );
};
