import React from 'react';
import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
  games: [],
  error: null,
  isLoading: false,
};

export const GameStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GamesContext.Provider value={[state, dispatch]}>{children}</GamesContext.Provider>;
};

export const GamesContext = createContext();
