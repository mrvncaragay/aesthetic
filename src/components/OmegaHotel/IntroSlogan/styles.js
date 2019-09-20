import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    justifyContent: 'space-evenly',
    width: '150px',
    display: 'flex',
    zIndex: 101,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },

  text: {
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
    fontSize: '0.8rem',
    fontWeight: 600
  }
}));
