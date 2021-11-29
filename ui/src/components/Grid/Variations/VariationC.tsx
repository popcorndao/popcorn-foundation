import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FrostedGlass } from '../../Surfaces';
import FullHeightContainer from './../FullHeightContainer';
import { Box, Typography } from '@material-ui/core';

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

export const VariationC = () => {
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
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Box maxWidth="477px">
        <FrostedGlass className={classes.FrostedGlass}>
            <Typography>Hello</Typography>
          </FrostedGlass>
        </Box>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </FullHeightContainer>
  );
};

export default VariationC;
