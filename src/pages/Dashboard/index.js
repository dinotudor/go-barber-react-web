import React, { useState, useMemo, useEffect } from 'react';
import { format, subDays, addDays, setHours, setMinutes, setSeconds } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import es from 'date-fns/locale/es';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

const range = [8, 9, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: es }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date }
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate =
        const compareDate = utcToZonedTime(date, timezone);
      });
    }
  }, []);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
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
