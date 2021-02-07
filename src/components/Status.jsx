/* eslint-disable */
import React, { useState, useEffect, useRef} from 'react';
import Typography from '@material-ui/core/Typography';
import opponent from '../img/merlin.png';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default () => {
  const [lineCount, setLineCount] = useState(0);
  const max = 20000;
  const min = 10000;
  let rand = Math.floor(Math.random() * (max - min + 1) + min);

  useInterval(() => {
    rand = Math.floor(Math.random() * (max - min + 1) + min);
    setLineCount(lineCount + 1);
  }, rand);
  
  return (
    <div>
      <Typography variant="h6" paragraph>Peek at your opponent 👀</Typography>
      <Avatar src={opponent}/> Merlin
      <Typography variant="body1" paragraph> Line written: {lineCount} </Typography>
      <Typography varaint="body1" paragraph> Tests ran: 0</Typography>
      <Typography varaint="body1" paragraph> Completed: No</Typography>
    </div>
  );
};