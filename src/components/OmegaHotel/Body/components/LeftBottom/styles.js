import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',

    '& button': {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0
      }
    }
  },

  active: {
    color: 'white'
  },

  inactive: { color: theme.palette.text.inactive }
}));
