import logo from './logo.svg';
import s from './App.module.css';
import { HowLongToBeatService } from 'howlongtobeat';
import { GameCard } from './Dashboard/@components';
import { GameProgressContextProvider } from './Dashboard/@context';

const hltb = new HowLongToBeatService();

const fetchAndLogWitcher = async () => {
  const withcerResults = await hltb.search('Witcher 3');
  console.log(withcerResults);
};

function App() {
  fetchAndLogWitcher();
  return (
    <GameProgressContextProvider>
      <div className={s.app}>
        <header className={s.appHeader}>
          <GameCard />
        </header>
      </div>
    </GameProgressContextProvider>
  );
}

export default App;
