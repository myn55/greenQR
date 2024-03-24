import { SearchBarContainer } from './components/SearchBarContainer';
import { TitleContainer } from './components/TitleContainer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Main'>
        <TitleContainer/>()
        <SearchBarContainer/>
      </div>
    </div>
  );
}

export default App;
