import React from 'react';

export default function Login() {
  return (
    <>
      <h2>LOGIN</h2>
      <br />
      <label htmlFor="email">
        <input id="email" data-testid="email-input" placeholder="Email" />
      </label>
      <br />
      <label htmlFor="password">
        <input id="password" data-testid="password-input" placeholder="Password" />
      </label>
      <br />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Enter

      </button>
    </>

  );
}
