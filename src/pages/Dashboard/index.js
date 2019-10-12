import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>31 Setembro</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Dino Tudor</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Free slot</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Dino Tudor</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Dino Tudor</span>
        </Time>
      </ul>
    </Container>
  );
}
