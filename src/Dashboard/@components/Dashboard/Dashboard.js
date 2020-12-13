import { Sidebar } from '../Sidebar/Sidebar';
import { GameForm } from '../GameForm/GameForm';
import { GamesList } from '../GamesList/GamesList';
import { GameStore } from '../../@context';
import s from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <GameStore>
      <div className={s.root}>
        <div className={s.sidebarSection}>
          <Sidebar />
        </div>
        <div className={s.gamesListSection}>
          <GamesList />
        </div>
        <div className={s.gameFormSection}>
          <GameForm />
        </div>
      </div>
    </GameStore>
  );
};
