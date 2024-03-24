import { SearchBarContainer } from './components/SearchBarContainer';
import { TitleContainer } from './components/TitleContainer';
import './App.css';

function App() {
  return (
    <div>
      <div className='Main'>
        <TitleContainer/>
        <SearchBarContainer/>
      </div>
    </div>
  );
}

export default App;
