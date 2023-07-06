import { Route, BrowserRouter, Switch } from 'react-router-dom'

import LoginOrRegisterForm from './components/LoginOrRegisterForm';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/register-and-login" component={LoginOrRegisterForm} />
    </Switch>
  </BrowserRouter>
)

export default App;
