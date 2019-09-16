import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '18.4%',
    color: 'white'
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
      marginRight: theme.spacing(0.5)
    }
  }
}));
