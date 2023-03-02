import React from 'react';

export default function Login() {
  return (
    <>
      <h2>LOGIN</h2>
      <br />
      <input
        type="text"
        id="email"
        data-testid="email-input"
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        id="password"
        data-testid="password-input"
        placeholder="Password"
      />
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
