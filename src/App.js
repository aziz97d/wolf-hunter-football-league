import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/teamDetails/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
