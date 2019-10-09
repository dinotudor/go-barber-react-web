import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="email adress" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your old password"
        />
        <Input
          type="password"
          name="password"
          placeholder="Type new password"
        />
        <Input
          type="password"
          name="confirmPasswor"
          placeholder="Confirm you password"
        />
        <button type="submit">Update proflie</button>
      </Form>
      <button type="button">Log out</button>
    </Container>
  );
}
