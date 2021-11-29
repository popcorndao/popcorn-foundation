import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
    margin:"1em",
    textDecoration: 'none',
  },
  LargeInput: {
    fontSize: '3em',
  },
  Heading: {
    fontWeight: 600,
  }
}));
