import React, { useEffect } from 'react';

import { setGames, setGamesLoading, setGamesDone, useGameContext } from '../../@context';
import { mockGames as requestMockedGames } from '../../@mocks';
import s from './GamesList.module.scss';
import { GameCard } from '../GameCard';

export const GamesList = () => {
  const [state, dispatch] = useGameContext();

  useEffect(() => {
    const fetchAndSetGames = async () => {
      dispatch(setGamesLoading());
      dispatch(setGames(await requestMockedGames()));
      dispatch(setGamesDone());
    };
    fetchAndSetGames();
  }, [dispatch]);

  return (
    <div className={s.root}>
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        state.games.map(game => <GameCard key={game.id} game={game}></GameCard>)
      )}
    </div>
  );
};
