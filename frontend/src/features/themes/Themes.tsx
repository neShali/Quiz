import React from 'react';
import { Grid, Typography } from '@mui/material';
import OneQuestionView from './OneQuestionView';

function Themes(): JSX.Element {
  const arr = ['1', '2', '3'];
  const arrQ = ['вопрос', 'вопрос2'];
  return (
    <div>
      {/* сюда передаем названия тем */}
      {arrQ.map((t) => (
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '30vh' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {t}
          </Typography>
          {/* сюда передаем массив с объектами вопросов */}
          {arr.map((el) => (
            <OneQuestionView />
          ))}
        </Grid>
      ))}
    </div>
  );
}

export default Themes;