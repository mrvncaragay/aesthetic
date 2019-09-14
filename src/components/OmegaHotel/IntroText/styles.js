import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    justifyContent: 'space-evenly',
    width: '180px',
    display: 'flex',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },

  text: {
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
    fontSize: '1.1rem',
    fontWeight: 600
  }
}));
