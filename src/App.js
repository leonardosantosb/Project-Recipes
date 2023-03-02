import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './componentes/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
export default App;
