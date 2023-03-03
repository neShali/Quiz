import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Button } from '@mui/material';
import OneQuestionView from './OneQuestionView';
import { RootState } from '../../store';
import * as themesApi from './api';
import type Theme from './types/Theme';
import Question from './types/Question';
import * as pointsApi from '../static/apiStatic';

function Themes(): JSX.Element {
  const themes = useSelector((state: RootState) => state.themes.themesList);
  const points = useSelector((state: RootState) => state.themes.score);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseGame = (): void => {
    pointsApi
      .addStaticUsers(points)
      .then((p) => dispatch({ type: 'static/addStaticUser', payload: p }));

    navigate('/static');
  };

  useEffect(() => {
    themesApi.loadThemes().then((t) => {
      dispatch({ type: 'themes/loadThemes', payload: t });
    });
  }, [dispatch]);

  return (
    <Grid container alignItems="center" justifyContent="center">
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
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: 48,
              color: 'violet',
              fontWeight: 'bold',
              textAlign: 'center',
              verticalAlign: 'center',
              margin: '0px 10px 0px 0px',
            }}
          >
            {theme.title}
          </Typography>
          {theme.questions.map(
            (el: Question): JSX.Element => (
              <OneQuestionView question={el} key={el.id} />
            ),
          )}
        </Grid>
      ))}
      <Button
        type="button"
        size="large"
        variant="outlined"
        color="secondary"
        onClick={handleCloseGame}
        style={{ marginBottom: '100px' }}
      >
        Закончить игру
      </Button>
    </Grid>
  );
}

export default Themes;
