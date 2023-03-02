import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';

export default function Login() {
  const { email, setEmail, senha, setSenha } = useContext(LoginContext);

  const handleEmail = (valueEmail) => {
    setEmail(valueEmail);
  };
  const handleSenha = (valueSenha) => {
    setSenha(valueSenha);
  };
  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const disableButton = () => {
    const lengthinput = 6;
    const regexValidation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    const validation = regexValidation.test(email)
      && senha.length > lengthinput;
    return !validation;
  };

  return (
    <>
      <h2>LOGIN</h2>
      <br />
      <input
        type="text"
        id="email"
        data-testid="email-input"
        placeholder="Email"
        onChange={ (e) => { handleEmail(e.target.value); } }
      />
      <br />
      <input
        type="text"
        id="password"
        data-testid="password-input"
        placeholder="Password"
        onChange={ (e) => { handleSenha(e.target.value); } }
      />
      <br />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disableButton() }
        onClick={ handleClick }
      >
        Enter

      </button>
    </>

  );
}
