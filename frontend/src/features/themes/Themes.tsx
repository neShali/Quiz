import React from 'react';
import { Grid, Typography } from '@mui/material';
import OneQuestionView from './OneQuestionView';

function Themes(): JSX.Element {
  const arr = ['1', '2', '3'];
  const arrQ = ['Тема 1', 'Тема 2'];
  return (
    <div>
      {arrQ.map((t) => (
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '30vh' }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 48, fontFamily: 'Szlichta', fontStyle: 'bold', color: 'violet', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'center', margin: '0px 10px 5px 0px' }}
          >
            {t}
          </Typography>
          {arr.map((el) => (
            <OneQuestionView />
          ))}
        </Grid>
      ))}
    </div>
  );
}

export default Themes;
