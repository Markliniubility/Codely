/* eslint-disable */
import React from 'react';
import Typography from '@material-ui/core/Typography';

import CountTo from 'react-count-to';

export default () => {
  return (
    <div>
      <Typography variant="h6" paragraph>Peek at your opponent 👀</Typography>
      <Typography variant="body1" paragraph> Line written: </Typography>
      <Typography varaint="body1" paragraph> </Typography>
      <CountTo to={1234} speed={1234} />
    </div>
  );
};