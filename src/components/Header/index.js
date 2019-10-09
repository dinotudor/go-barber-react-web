import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logoPurple from '~/assets/logo-small.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="Logo Gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Carol</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Carol"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
