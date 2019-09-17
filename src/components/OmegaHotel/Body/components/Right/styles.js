import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 3,
    display: 'flex',
    alignItems: 'center'
  },

  imageContainer: {
    height: '100%',
    width: '100%'
  },

  backgroundImage: {
    // Image style
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
}));
