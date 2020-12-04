import logo from './logo.svg';
import './App.css';
import { HowLongToBeatService } from 'howlongtobeat';

const hltb = new HowLongToBeatService();

const fetchAndLogWitcher = async () => {
  const withcerResults = await hltb.search('Witcher 3');
  console.log(withcerResults);
};

function App() {
  fetchAndLogWitcher();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
