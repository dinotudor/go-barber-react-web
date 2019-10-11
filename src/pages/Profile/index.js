import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

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
