import logo from './logo.svg';
import './App.css';

function App() {
  let a=10;
  let styleH1={
    color:"tomato",
    textAlign:"center"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 style={styleH1}>Welcome to React Project</h1>

        <div className="demo">
        <p style={{color:"magenta",fontSize:"2rem"}}>values can be accesed in this way {a}</p>
        <p>2+3+5+7</p>
        <p>{2+3+5+7}</p>

        </div>
        
        <div className="button">
          <button>Apple</button>
          <button>Orange</button>

          <button>Purple</button>


        </div>
      </header>
    </div>
  );
}

export default App;
