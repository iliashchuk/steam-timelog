import React, { Component } from 'react';
import s from './GameCard.module.scss';

const game = {
  name: 'The Elder Scrolls V: Skyrim',
  image: 'https://upload.wikimedia.org/wikipedia/ru/3/3a/The_Elder_Scrolls_V_-_Skyrim.jpg',
};
export class GameCard extends Component {
  render() {
    return (
      <figure className={s.gameCard}>
        <img src={game.image} alt={game.name} />
        <figcaption>{game.name}</figcaption>

        {`${this.context.gameCompletionType}`}
      </figure>
    );
  }
}
