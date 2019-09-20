import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    zIndex: 101,
    height: '20%',
    backgroundColor: theme.palette.omegaHotel.background,
    padding: theme.spacing(0, 0, 0, 12),

    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      padding: theme.spacing(0, 0, 0, 2)
    }
  }
}));
