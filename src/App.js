import { SearchBarContainer } from './SearchBarContainer';
import logo from './grq_icon.png'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Main'>
        <span className='TitleContainer'>
          <img src={logo} className='TitleLogo'/>
          <span className='Title'>GreenQR</span>
        </span>
        <SearchBarContainer/>
      </div>
    </div>
  );
}

export default App;
