import '../css/App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Music from './Music';
import Skills from './Skills';


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
        <section id="about" className="main-body-sections">
          <About />
        </section>
        <section id="skills" className="main-body-sections">
          <Skills />
        </section>
        <section id="music" className="main-body-sections">
          <Music />
        </section>
      </main>
    </div >
  );
}

export default App;
