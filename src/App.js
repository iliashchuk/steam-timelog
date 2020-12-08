import React from 'react';

import s from './App.module.css';
import { GamesList } from './Dashboard/@components/GamesList/GamesList';
import { GameStore } from './Dashboard/@context';

function App() {
  return (
    <GameStore>
      <div className={s.app}>
        <header className={s.appHeader}>
          <GamesList />
        </header>
      </div>
    </GameStore>
  );
}

export default App;
