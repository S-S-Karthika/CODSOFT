import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Projects/>
     <Resume/>
     <Contact/>
    </div>
  );
}

export default App;
