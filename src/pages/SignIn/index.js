import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Gobaber logo" />

      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />

        <button type="submit">Sign in</button>
        <Link to="/register">Sign up for a new account</Link>
      </form>
    </>
  );
}
