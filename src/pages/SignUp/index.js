import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Gobaber logo" />

      <form>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />

        <button type="submit">Create account</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
