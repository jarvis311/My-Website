
import './App.css';
import About from './Components/About';
import MySkill from './Components/MySkill';
import MyProjects from './Components/MyProjects'
import MyContact from './Components/MyContact'
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

      
      <Header/>
      <Navbar/>
      <About/>
      <MySkill/>
      <MyProjects/>
      <MyContact/>
    </div>
  );
}

export default App;
