import React from 'react';
import s from './GameCard.module.scss';

export const GameCard = ({ game }) => {
  return (
    <figure className={s.gameCard}>
      <img src={game.imageUrl} alt={game.name} />
      <figcaption>{game.name}</figcaption>
    </figure>
  );
};
