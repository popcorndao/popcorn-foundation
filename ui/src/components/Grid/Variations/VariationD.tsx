import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FrostedGlass } from '../../Surfaces';
import FullHeightContainer from './../FullHeightContainer';
import { Box, styled, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    color: theme.palette.text.primary,
  },
  header: {
    flexShrink: 0,
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
  },
  footer: {
    flexShrink: 0,
  },
  widget: {
    marginTop: 'auto',
    flexDirection: 'row',
    margin: '0 auto',
    display: 'inline-block',
    height: '400px',
    width: '400px',
    overflow: 'hidden',
  },
  FrostedGlass: {
    minHeight: '30px',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));
export const VariationD = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <header className={classes.header}>
          <Grid
            container
            spacing={2}
            direction="row"
            alignContent="stretch"
            alignItems="flex-start"
          >
            <Grid item xs={3}>
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est. Scelerisque fermentum dui faucibus in ornare. Tincidunt eget nullam non nisi est sit amet facilisis. Sit amet venenatis urna cursus.</Typography>
              </FrostedGlass>
            </Grid>
            <Grid item xs={6} alignItems="center" alignContent="center">
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>cs3</Typography>
              </FrostedGlass>
            </Grid>
            <Grid item xs={3}>
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>xs3</Typography>
              </FrostedGlass>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={3}>
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>xs3</Typography>
              </FrostedGlass>
            </Grid>
            <Grid item xs={6} alignItems="center" alignContent="center">
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>cs3</Typography>
              </FrostedGlass>
            </Grid>
            <Grid item xs={3}>
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>xs3</Typography>
              </FrostedGlass>
            </Grid>
          </Grid>
        </header>

        <main className={classes.main}>
          <Box className={classes.widget}>
            <FrostedGlass className={classes.FrostedGlass}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                ornare lectus sit amet est. Scelerisque fermentum dui faucibus
                in ornare. Tincidunt eget nullam non nisi est sit amet
                facilisis. Sit amet venenatis urna cursus. Odio eu feugiat
                pretium nibh ipsum. Pellentesque adipiscing commodo elit at
                imperdiet dui accumsan sit. Leo in vitae turpis massa. Augue
                interdum velit euismod in. Sit amet consectetur adipiscing elit
                pellentesque habitant morbi tristique senectus. Ornare quam
                viverra orci sagittis eu. Id cursus metus aliquam eleifend mi in
                nulla posuere sollicitudin. Laoreet suspendisse interdum
                consectetur libero id faucibus nisl tincidunt eget. Magna sit
                amet purus gravida quis blandit turpis cursus.
              </Typography>
            </FrostedGlass>
          </Box>
          <Box className={classes.widget}>
            <FrostedGlass className={classes.FrostedGlass}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                ornare lectus sit amet est. Scelerisque fermentum dui faucibus
                in ornare. Tincidunt eget nullam non nisi est sit amet
                facilisis. Sit amet venenatis urna cursus. Odio eu feugiat
                pretium nibh ipsum. Pellentesque adipiscing commodo elit at
                imperdiet dui accumsan sit. Leo in vitae turpis massa. Augue
                interdum velit euismod in. Sit amet consectetur adipiscing elit
                pellentesque habitant morbi tristique senectus. Ornare quam
                viverra orci sagittis eu. Id cursus metus aliquam eleifend mi in
                nulla posuere sollicitudin. Laoreet suspendisse interdum
                consectetur libero id faucibus nisl tincidunt eget. Magna sit
                amet purus gravida quis blandit turpis cursus.
              </Typography>
            </FrostedGlass>
          </Box>
        </main>

        <footer className={classes.footer}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={3}>
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>xs3</Typography>
              </FrostedGlass>
            </Grid>
            <Grid item xs={6} alignItems="center" alignContent="center">
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>cs3</Typography>
              </FrostedGlass>
            </Grid>
            <Grid item xs={3}>
              <FrostedGlass className={classes.FrostedGlass}>
                <Typography>xs3</Typography>
              </FrostedGlass>
            </Grid>
          </Grid>
        </footer>
      </Box>
    </>
  );
};
export default VariationD;
