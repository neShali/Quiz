import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import OneQuestionView from './OneQuestionView';
import { RootState } from '../../store';
import * as themesApi from './api';
import type Theme from './types/Theme';
import Question from './types/Question';

function Themes(): JSX.Element {
  const themes = useSelector((state: RootState) => state.themes.themesList);
  const dispatch = useDispatch();

  useEffect(() => {
    themesApi.loadThemes().then((t) => {
      dispatch({ type: 'themes/loadThemes', payload: t });
    });
  }, [dispatch]);

  return (
    <div>
      {themes.map((theme: Theme) => (
        <Grid
          container
          key={theme.id}
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '30vh' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {theme.title}
          </Typography>
          {theme.questions.map(
            (el: Question): JSX.Element => (
              <OneQuestionView question={el} key={el.id} />
            ),
          )}
        </Grid>
      ))}
    </div>
  );
}

export default Themes;
