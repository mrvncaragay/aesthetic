import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  title: {
    overflow: 'hidden',

    '& h3': {
      fontWeight: 600,
      position: 'relative',

      [theme.breakpoints.down('sm')]: {
        fontSize: '12px'
      }
    }
  },

  devider: {
    margin: theme.spacing(2, 0, 2, 0),
    width: '0%',
    transition: 'all 1s  cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animate': {
      width: '60%'
    }
  },

  body: {
    textAlign: 'center',
    overflow: 'hidden',

    '& h5': {
      color: 'black',
      position: 'relative',
      lineHeight: '15px',

      [theme.breakpoints.down('sm')]: {
        fontSize: '10px'
      }
    }
  }
}));
