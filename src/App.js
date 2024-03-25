import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='grid-container'>
        <div className='grid-header page-header'>
          <span className='page-title'>header</span>
        </div>
        
        <div className='grid-nav'>
          <h1>navbar</h1>
        </div>
        
        <div className='grid-side'>
          <h1>sidebar</h1>
        </div>

        <div className='grid-main'>
          <h1>main</h1>
        </div>

        <div className='grid-footer'>
          <h1>footer</h1>
        </div>
      </div>
    </div>
  );
}

export default App;