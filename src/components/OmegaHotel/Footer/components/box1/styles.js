import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '18.4%',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  title: {
    marginBottom: theme.spacing(2),

    '& h4 ': {
      position: 'relative',
      marginRight: theme.spacing(0.7)
    }
  },

  body: {
    '& h5': {
      position: 'relative',
      lineHeight: '20px'
    }
  }
}));
