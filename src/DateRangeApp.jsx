import React, { useState, useEffect } from 'react';
import './DateRangeApp.css';
import './animate.css';
import shortid from 'shortid';
import axios from 'axios';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const DateRangeApp = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [whatHappened, setWHatHappened] = useState('');

  const onChange = dateRange => setDateRange(dateRange);
  const one_day = 1000 * 60 * 60 * 24;
  const [start, end] = dateRange;

  const isLeapYear = year =>
    year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

  const daysBetween = Math.round((end.getTime() - start.getTime()) / one_day);
  const startLeap = isLeapYear(start.getFullYear()) ? 'Yes' : 'No';
  const endLeap = isLeapYear(end.getFullYear()) ? 'Yes' : 'No';
  const mondays = Math.floor(daysBetween / 7) + (start.getDay() === 1 ? 1 : 0);

  useEffect(() => {
    axios
      .get(
        `http://numbersapi.com/${start.getMonth() + 1}/${start.getDate()}/date`,
      )
      .then(response => {
        setWHatHappened(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [start, end]);

  return (
    <div>
      <header>
        <div key={shortid.generate()} class='animated rubberBand'>
          VAT Global Date Range Picker
        </div>
      </header>
      <div class='content'>
        <DateRangePicker
          onChange={onChange}
          value={dateRange}
          clearIcon={null}
        />
        <p>
          Days Between -{' '}
          <span class='animated flash' key={shortid.generate()}>
            {daysBetween}
          </span>
        </p>
        <p>
          Start Leap Year -{' '}
          <span class='animated flash' key={shortid.generate()}>
            {startLeap}
          </span>
        </p>
        <p>
          End Leap Year -{' '}
          <span class='animated flash' key={shortid.generate()}>
            {endLeap}
          </span>
        </p>
        <p>
          Number of Mondays -{' '}
          <span class='animated flash' key={shortid.generate()}>
            {mondays}
          </span>
        </p>
        <p>
          What happened on this day
          <span class='what-happened'> {whatHappened}</span>
        </p>
      </div>
    </div>
  );
};
export default DateRangeApp;
