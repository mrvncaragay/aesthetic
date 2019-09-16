import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    zIndex: 100,
    display: 'flex',
    alignItems: 'flex-end',

    '&.animate': {
      height: '100%'
    }
  },

  box: {
    width: '18.4%',
    backgroundColor: theme.palette.omegaHotel.background
  }
}));
