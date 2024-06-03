import './App.css';
import { Counter } from './components/counter/counter';
// import { Application } from './components/application/application';
// import { Skills } from './components/skills/skills';

function App() {
  // const skills = ["HTML", "CSS", "JavaScript"];
  
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={skills} /> */}
      <Counter />
    </div>
  );
}

export default App;
