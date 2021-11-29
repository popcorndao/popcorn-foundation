import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FrostedGlass } from '../Surfaces';
import FullHeightContainer from '../Grid/FullHeightContainer';
import { Box, Button, Input, Typography } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
  },
  FrostedGlass: {
    padding: theme.spacing(2),
    minHeight: '30px',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  SecondaryButton: {
    color: theme.palette.primary.dark,
    margin:"1em"
  },
  PrimaryButton: {
    margin:"1em"
  },
  LargeInput: {
    fontSize: '3em',
  },
  Heading: {
    fontWeight: 600,
  }
}));

const LargeInput = styled(Input)`
  font-size:3em;
`;

export const LoginPage = () => {
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
        <Grid item xs={3}>
          </Grid>
        <Grid item xs={6}>
        <Box marginBottom="5em" alignContent="center">
          <Box component="h2" fontWeight="200">Alright, then! </Box>

          <Typography variant="h3" className={classes.Heading}>Enter your password</Typography>

          </Box>
        </Grid>
        <Grid item xs={3}>
          </Grid>
        
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <LargeInput fullWidth autoFocus></LargeInput>

        </Grid>
        <Grid item xs={3}>
        
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
         <Box alignContent="right" marginTop="1em">
          <Button variant="outlined" size="large">Continue</Button>
          <Button variant="outlined" size="medium" className={classes.SecondaryButton} component="button">Go Back</Button>
         </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </FullHeightContainer>
  );
};


export default LoginPage;