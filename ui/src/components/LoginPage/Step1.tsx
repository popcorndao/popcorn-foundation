import React from 'react';
import Grid from '@material-ui/core/Grid';
import FullHeightContainer from '../Grid/FullHeightContainer';
import { Box, Button, Input, Typography } from '@material-ui/core';
import { useStyles } from './styles';


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
          <Box component="h2" fontWeight="200">Hey there! </Box>

          <Typography variant="h3" className={classes.Heading}>What's your name?</Typography>

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
          <Input fullWidth autoFocus className={classes.LargeInput}></Input>

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