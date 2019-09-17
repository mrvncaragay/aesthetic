import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    zIndex: 100,
    padding: theme.spacing(0, 12, 8, 12)
  }
}));
