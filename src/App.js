import React from 'react';
import { Dashboard } from './Dashboard/@components/Dashboard/Dashboard';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <Dashboard />
    </div>
  );
}

export default App;
