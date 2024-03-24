import { TitleContainer } from './components/TitleContainer';
import { SearchBarContainer } from './components/SearchBarContainer';
import { SearchResultsContainer } from './components/SearchResultsContainer';
import { useState } from 'react';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div>
      <div className='Main'>
        <TitleContainer/>
        <SearchBarContainer setSearchResults={setSearchResults}/>
        <SearchResultsContainer searchResults={searchResults}/>
      </div>
    </div>
  );
}

export default App;
