import { GamesActionsType } from './reducer';

export const setGames = games => ({ type: GamesActionsType.setGames, games: games });
export const resetGames = () => ({ type: GamesActionsType.resetGames });
export const setGamesLoading = () => ({ type: GamesActionsType.setLoading });
export const setGamesDone = () => ({ type: GamesActionsType.setDone });
