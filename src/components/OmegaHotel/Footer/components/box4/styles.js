import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '18.4%',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
      width: '40%'
    }
  },

  title: {
    marginBottom: theme.spacing(1),

    '& h5 ': {
      position: 'relative'
    }
  },

  body: {
    '& h4': {
      position: 'relative',
      marginRight: theme.spacing(0.5),

      [theme.breakpoints.down('sm')]: {
        fontSize: '12px'
      }
    }
  }
}));
