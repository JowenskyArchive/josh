import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/detail/" component={CharacterDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
