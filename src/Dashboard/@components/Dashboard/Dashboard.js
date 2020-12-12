import { Sidebar } from '../Sidebar/Sidebar';
import { GameForm } from '../GameForm/GameForm';
import { GamesList } from '../GamesList/GamesList';
import { GameStore } from '../../@context';
import s from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <div className={s.dashboardWrapper}>
      <GameStore>
        <Sidebar />
        <GamesList />
        <GameForm />
      </GameStore>
    </div>
  );
};
