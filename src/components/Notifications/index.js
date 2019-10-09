import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge } from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
    </Container>
  );
}
