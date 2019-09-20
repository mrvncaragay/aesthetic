import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  default: {
    height: '30px',
    width: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& h4': {
      position: 'absolute'
    }
  },

  contained: {
    height: '30px',
    width: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& $circle': {
      width: '0px',
      height: '0px',
      backgroundColor: 'white',
      borderRadius: '50%',
      transition: `all 1000ms cubic-bezier(0.25, 0.45, 0.45, 0.95)`
    },

    '& $circle.animate': {
      width: '30px',
      height: '30px',

      [theme.breakpoints.down('sm')]: {
        width: '20px',
        height: '20px'
      }
    },

    '& h4': {
      position: 'absolute',
      color: 'black',

      [theme.breakpoints.down('sm')]: {
        fontSize: '12px'
      }
    }
  },

  circle: {}
}));
