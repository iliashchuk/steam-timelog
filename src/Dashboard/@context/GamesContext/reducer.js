export const GamesActionsType = {
  setGames: 'SET_GAMES',
  resetGames: 'RESET_GAMES',
  setLoading: 'SET_LOADING',
  setDone: 'SET_DONE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GamesActionsType.setGames:
      return {
        ...state,
        games: action.games,
      };
    case GamesActionsType.resetGames:
      return {
        ...state,
        games: [],
      };
    case GamesActionsType.setLoading:
      return {
        ...state,
        isLoading: true,
      };
    case GamesActionsType.setDone: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
