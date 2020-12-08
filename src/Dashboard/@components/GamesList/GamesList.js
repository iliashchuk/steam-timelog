import React, { useEffect, useContext } from 'react';

import { HowLongToBeatService } from 'howlongtobeat';
import { setGames, setGamesLoading, setGamesDone, GamesContext } from '../../@context';
import s from './GamesList.module.scss';
import { GameCard } from '../GameCard';

const hltb = new HowLongToBeatService();

const fetchGames = searchQuery => {
  return hltb.search(searchQuery);
};

export const GamesList = () => {
  const [state, dispatch] = useContext(GamesContext);

  useEffect(() => {
    const fetchAndSetGames = async gameQuery => {
      dispatch(setGamesLoading());
      dispatch(setGames(await fetchGames(gameQuery)));
      dispatch(setGamesDone());
    };
    const gameQuery = prompt('Choose a game.');
    if (gameQuery) {
      console.log(gameQuery);
      fetchAndSetGames(gameQuery);
    }
  }, [dispatch]);

  return (
    <div className={s.root}>
      {state.games.map(game => (
        <GameCard game={game}></GameCard>
      ))}
    </div>
  );
};
