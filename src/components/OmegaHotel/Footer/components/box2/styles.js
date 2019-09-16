import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '18.4%'
  },

  title: {
    marginBottom: theme.spacing(1),

    '& h5': {
      position: 'relative'
    }
  },

  body: {
    '& h4': {
      position: 'relative'
    }
  }
}));
