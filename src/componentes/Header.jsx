import React from 'react';
import { useHistory } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header() {
  const history = useHistory();

  return (
    <header>
      <section>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="human silhouette"
          onClick={ () => history.push('/profile') }
        />
        {/*         <h1 data-testid="page-title">
          {}
        </h1> */}
        <input
          type="image"
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="desenho de uma lupa"
          onClick={ () => history.push() }
        />
      </section>
    </header>
  );
}

export default Header;
