import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Inform a valid email')
    .required('email is required'),
  password: Yup.string().required('password is required'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Gobaber logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="email" />
        <Input name="password" type="password" placeholder="password" />

        <button type="submit">Sign in</button>
        <Link to="/register">Sign up for a new account</Link>
      </Form>
    </>
  );
}
