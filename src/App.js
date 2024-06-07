import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home.jsx'
import Skills from './components/skills/Skills.jsx';
import AboutMe from './components/about_me/AboutMe.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Home/>
        <Skills />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
