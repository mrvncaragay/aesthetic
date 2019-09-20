import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',

    '& button': {
      paddingLeft: 0
    }
  },

  active: {
    color: 'white'
  },

  inactive: { color: theme.palette.text.inactive }
}));
