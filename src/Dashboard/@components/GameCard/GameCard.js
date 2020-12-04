import React, { Component } from 'react';
import s from './GameCard.module.scss';

export class GameCard extends Component {
  render() {
    return <div className={s.gameCard}>This is, in fact, a game card.{`${this.context.gameCompletionType}`}</div>;
  }
}
