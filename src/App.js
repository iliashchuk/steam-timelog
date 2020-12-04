import logo from './logo.svg';
import s from './App.module.css';
import { HowLongToBeatService } from 'howlongtobeat';

const hltb = new HowLongToBeatService();

const fetchAndLogWitcher = async () => {
  const withcerResults = await hltb.search('Witcher 3');
  console.log(withcerResults);
};

function App() {
  fetchAndLogWitcher();
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <img src={logo} className={s.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={s.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
