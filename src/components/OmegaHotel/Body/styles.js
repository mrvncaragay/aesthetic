import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    padding: theme.spacing(0, 12, 8, 12),

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: theme.spacing(0, 2, 3, 2)
    }
  }
}));
