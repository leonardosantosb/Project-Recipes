import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import LoginContext from './LoginContext';

export function LoginProvider({ children }) {
  const [login, setLogin] = useState([]);

  const values = useMemo(() => ({
    login,
    setLogin,

  }), [login]);

  return (
    <LoginContext.Provider value={ values }>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
