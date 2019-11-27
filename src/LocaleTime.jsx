import React, { useState, useEffect } from 'react';

const LocaleTime = () => {
  const [date, setDate] = useState(null);
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  if (!date) {
    return null;
  }

  return <div>{date.toLocaleTimeString()}</div>;
};

export default LocaleTime;
