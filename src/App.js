import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <header id="header" className="d-flex flex-column justify-content-center">
        <Navbar />
      </header>
      <div className="intro-section">
        <h1>Nathan James.</h1>
        <p>
          Coming Soon...
        </p>
        <button className="btn btn-primary">Click Me</button>
      </div>
    </div >
  );
}

export default App;
