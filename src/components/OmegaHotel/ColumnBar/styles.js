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
    width: '16.66666%',
    backgroundColor: theme.palette.omegaHotel.background
  }
}));
