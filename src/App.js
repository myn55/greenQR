import { TitleContainer } from './components/TitleContainer';
import { SearchBarContainer } from './components/SearchBarContainer';
import { SearchResultsContainer } from './components/SearchResultsContainer';
import { useState } from 'react';
import './App.css';
import { InfoBlock } from './components/InfoBlock';

function App() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className='App'>
      <TitleContainer/>
      <div>
        <SearchBarContainer setSearchResults={setSearchResults}/>
        <SearchResultsContainer searchResults={searchResults}/>
      </div>
    </div>
  );
}

export default App;
