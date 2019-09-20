import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    flex: 2,
    display: 'flex',
    marginLeft: '30%',
    width: '600px',
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

    '& h5': {
      color: 'white'
    },

    [theme.breakpoints.down('sm')]: {
      width: '270px',

      '& h2': {
        fontSize: '24px',
        lineHeight: '30px'
      }
    }
  }
}));
