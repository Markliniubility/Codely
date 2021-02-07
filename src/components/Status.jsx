/* eslint-disable */
import React, { useState, useEffect, useRef} from 'react';
import Typography from '@material-ui/core/Typography';
import opponent from '../img/merlin.png';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

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
      <div style={{'display': 'inline-block', 'margin-bottom': '10px'}}>
        <Avatar style={{'float': 'left', 'margin-right': '10px'}} src={opponent}/>
        <Chip style={{'float': 'right', 'margin-top': '5px'}} label={'Gold'} />
        <Typography variant="h6" style={{'float': 'right', 'padding-top': '5px', 'margin-right': '10px'}}>Merlin</Typography>
      </div>
      <Typography variant="body1" paragraph> Line written: {lineCount} </Typography>
      <Typography varaint="body1" paragraph> Tests ran: 0</Typography>
      <Typography varaint="body1" paragraph> Completed: No</Typography>
    </div>
  );
};
