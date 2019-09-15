import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    padding: theme.spacing(6, 12, 6, 12)
  },

  box: {
    height: '10%',
    width: '16.66666%',
    backgroundColor: theme.palette.omegaHotel.background
  }
}));
