import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',

    height: '10%',
    backgroundColor: theme.palette.omegaHotel.background,
    padding: theme.spacing(6, 12, 6, 12)
  }
}));
