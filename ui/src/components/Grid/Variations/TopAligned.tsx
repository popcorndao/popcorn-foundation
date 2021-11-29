import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FrostedGlass } from "../../Surfaces";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  FrostedGlass: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export const TopAligned = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FrostedGlass className={classes.FrostedGlass}>xs=12</FrostedGlass>
        </Grid>
        <Grid item xs={6}>
          <FrostedGlass className={classes.FrostedGlass}>xs=6</FrostedGlass>
        </Grid>
        <Grid item xs={6}>
          <FrostedGlass className={classes.FrostedGlass}>xs=6</FrostedGlass>
        </Grid>
        <Grid item xs={3}>
          <FrostedGlass className={classes.FrostedGlass}>xs=3</FrostedGlass>
        </Grid>
        <Grid item xs={3}>
          <FrostedGlass className={classes.FrostedGlass}>xs=3</FrostedGlass>
        </Grid>
        <Grid item xs={3}>
          <FrostedGlass className={classes.FrostedGlass}>xs=3</FrostedGlass>
        </Grid>
        <Grid item xs={3}>
          <FrostedGlass className={classes.FrostedGlass}>xs=3</FrostedGlass>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopAligned;
