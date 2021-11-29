import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FrostedGlass } from '../../Surfaces';
import FullHeightContainer from './../FullHeightContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
  },
  FrostedGlass: {
    padding: theme.spacing(2),
    minHeight: '30px',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export const GridLayout = () => {
  const classes = useStyles();
  return (
    <FullHeightContainer className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}><FrostedGlass className={classes.FrostedGlass}>xs=3</FrostedGlass></Grid>
        <Grid item xs={6}>
        <FrostedGlass className={classes.FrostedGlass}>
            xs=6
          </FrostedGlass>
        </Grid>
        <Grid item xs={3}>
        <FrostedGlass className={classes.FrostedGlass}>xs=3</FrostedGlass>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <FrostedGlass className={classes.FrostedGlass}>
              xs-6
          </FrostedGlass>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </FullHeightContainer>
  );
};

export default GridLayout;
