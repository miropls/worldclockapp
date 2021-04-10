import './App.css';
import Clock from "./components/Clock/Clock";
import Button from "./components/Btn/Btn";
import Music from "./components/EmbeddedMusic/Music";
import "./components/Clock/clock.css";
import "./components/Btn/btn.css";
import "./components/EmbeddedMusic/music.css"

const App = () => {
  return (
    <div>
      <Music />
      <Clock />
    </div>
  );
}

export default App;

