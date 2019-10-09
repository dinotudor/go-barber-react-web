import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Notification } from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Notification unread>
          <p>You have a new appointent</p>
          <time>1 day ago</time>
          <button type="button">Mark as read</button>
        </Notification>
        <Notification>
          <p>You have a new appointent</p>
          <time>1 day ago</time>
          <button type="button">Mark as read</button>
        </Notification>
        <Notification>
          <p>You have a new appointent</p>
          <time>1 day ago</time>
          <button type="button">Mark as read</button>
        </Notification>
      </NotificationList>
    </Container>
  );
}
