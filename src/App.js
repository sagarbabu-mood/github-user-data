import { Route, BrowserRouter, Switch } from 'react-router-dom'

import LoginOrRegisterForm from './components/LoginOrRegisterForm';
import HomePage from './components/Home';
import './App.css';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register-and-login" component={LoginOrRegisterForm} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
)

export default App;
