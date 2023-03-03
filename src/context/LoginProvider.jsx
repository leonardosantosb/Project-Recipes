import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import LoginContext from './LoginContext';

export function LoginProvider({ children }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const values = useMemo(() => ({
    email,
    setEmail,
    senha,
    setSenha,

  }), [email, senha]);

  return (
    <LoginContext.Provider value={ values }>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
