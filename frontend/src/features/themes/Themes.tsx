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

    <div
      style={{
        marginTop: '50px',
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#282828' }}
      >
        {themes.map((theme: Theme) => (
          <Grid
            container
            key={theme.id}
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            // style={{ minHeight: '28.5vh' }}
            // sx={{
            //   margin: '0px',
            // }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                maxWidth: '300px',
                fontSize: 48,
                fontFamily: 'Szlichta',
                fontStyle: 'bold',
                color: 'violet',
                fontWeight: 'bold',
                textAlign: 'center',
                verticalAlign: 'center',
                margin: '0px 50px 0px 0px',
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
    </div>

  );
}

export default Themes;
