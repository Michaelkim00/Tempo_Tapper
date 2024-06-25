import Header from './components/Header';
import SongControls from './components/SongControls';
import TapButton from './components/TapButton';
import BpmDisplay from './components/BpmDisplay';
import ResetButton from './components/ResetButton';

function App() {
  return (
      <div className="App">
          <Header/>
          <div className="container">
              <SongControls/>
              <TapButton/>
              <BpmDisplay/>
              <ResetButton/>
          </div>
      </div>
  );
}

export default App;
