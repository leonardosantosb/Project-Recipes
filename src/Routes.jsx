import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import FavoriteRecipies from './pages/FavoritesRecipies';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } /* não pode possuir header */ />
      <Route exact path="/meals" component={ Meals } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route
        exact
        path="/meals/:id-da-receita"
        component={ Meals /* não pode possuir header */ }
      />
      <Route
        exact
        path="/drinks/:id-da-receita"
        component={ Drinks /* não pode possuir header */ }
      />
      <Route
        exact
        path="/meals/:id-da-receita/in-progress"
        component={ Meals /* não pode possuir header */ }
      />
      <Route
        exact
        path="/drinks/:id-da-receita/in-progress"
        component={ Drinks /* não pode possuir header */ }
      />
      <Route
        exact
        path="/profile"
        component={ Profile /* header sem o ícone de pesquisa */ }
      />
      <Route
        exact
        path="/favorite-recipes"
        component={ FavoriteRecipies /* header sem o ícone de pesquisa */ }
      />
    </Switch>

  );
}

export default Routes;
