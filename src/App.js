import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';


function App() {
  return (
    <div className="App">
      <header id="header" className="d-flex flex-column justify-content-center">
        <Navbar />
      </header>
      <section id="home">
        <Home />
      </section>
      <main>
        <section id="about">
          <About />
        </section>
        <section id="music">
          <Music />
        </section>
      </main>
    </div >
  );
}

export default App;
