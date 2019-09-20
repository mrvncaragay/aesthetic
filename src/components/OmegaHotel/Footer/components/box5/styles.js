import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  box: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '8%',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
