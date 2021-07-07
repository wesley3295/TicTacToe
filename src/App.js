import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GameContainer from './components/GameContainer.js'
import Incrementer from './components/Incrementer.js'
import Home from './components/Home.js'
import Swapi from './components/Swapi.js'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/increment'><Incrementer /></Route>
          <Route exact path='/SWAPI'><Swapi /></Route>
          <Route exact path='/tictactoe'><GameContainer /></Route>
          <Route exact path='/'><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
