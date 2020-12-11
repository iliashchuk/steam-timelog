import { GamesList } from '../GamesList/GamesList';
import { GameStore } from '../../@context';
import s from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <GameStore>
      <div className={s.dashboard}>
        <GamesList />
      </div>
    </GameStore>
  );
};
