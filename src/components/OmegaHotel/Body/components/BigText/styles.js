import { makeStyles } from '@material-ui/styles';
import { relative } from 'path';

export default makeStyles(theme => ({
  root: {
    flex: 2,
    display: 'flex',
    marginLeft: '30%',
    width: '600px',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  heading: {
    '& h5': {
      color: 'white'
    }
  },

  body: {
    color: 'white',
    overflow: 'hidden',

    '& h2': {
      position: 'relative'
    }
  }
}));
