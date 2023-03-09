import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const savedEmail = localStorage.getItem('user');
  const parseEmail = JSON.parse(savedEmail);
  const showEmail = Object.values(parseEmail || {});
  const history = useHistory();

  const logoutInput = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <section>
      <h1 data-testid="page-title">Profile</h1>
      <Footer />
      <Header />
      <div>
        <p data-testid="profile-email">{showEmail}</p>
        <button
          data-testid="profile-done-btn"
          onClick={ () => history.push('done-recipes') }
        >
          Done Recipes
        </button>
        <button
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          onClick={ () => logoutInput() }
        >
          Logout
        </button>
      </div>
    </section>
  );
}
