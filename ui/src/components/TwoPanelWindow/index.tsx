import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid, { GridDirection } from '@material-ui/core/Grid';
import { FrostedGlass, FrostedPaper } from '../Surfaces';

const useStyles = makeStyles((theme) => ({
  FrostedGlass: {
    padding: theme.spacing(0),
    color: theme.palette.text.primary,
  },
}));

export interface TwoPanelWindowProps {
  leftPanel?: {
    size?: 1 | 2 | 3 | 4 | 5 | "auto" | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    direction?: GridDirection,
  },
  rightPanel?: {
    size?: 1 | 2 | 3 | 4 | 5 | "auto" | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  }
  children?: React.ReactElement[],
}


export const TwoPanelWindow: React.FC<TwoPanelWindowProps> = ({leftPanel, rightPanel, children}) => {
  const classes = useStyles();
  return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <FrostedGlass className={classes.FrostedGlass}>
            <Grid container spacing={0} direction="row" justify="space-between">
              <Grid item xs={leftPanel?.size || 5}>
                <Grid
                  container
                  spacing={1}
                  direction={"column"}
                  alignItems="stretch"
                >
                  {children[0]}
                </Grid>
              </Grid>
              <Grid item xs={rightPanel?.size || 7}>
                <FrostedPaper width="100%" height="100%" square rounded="right">
                  {children[1]}
                </FrostedPaper>
              </Grid>
            </Grid>
          </FrostedGlass>
        </Grid>
      </Grid>
  );
};

export default TwoPanelWindow;
