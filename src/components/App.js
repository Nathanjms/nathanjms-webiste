import '../css/App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Music from './Music';


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
