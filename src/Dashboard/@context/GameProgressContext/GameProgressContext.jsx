import React from 'react';

class GameProgressContextFactory {
  gameCompletionType = 'allStyles';

  setGameCompletionType(completionType) {
    this.gameCompletionType = completionType;
  }
}

export const GameProgressContext = React.createContext(new GameProgressContextFactory());

export const GameProgressContextProvider = ({ children }) => (
  <GameProgressContext.Provider value={new GameProgressContextFactory()}>{children}</GameProgressContext.Provider>
);
