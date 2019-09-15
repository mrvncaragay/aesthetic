import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  box: {
    height: '100%',
    width: '16.66666%',
    color: 'white'
  },

  title: {
    marginBottom: theme.spacing(1),

    '& h5': {
      position: 'relative'
    }
  },

  body: {
    '& h4': {
      position: 'relative'
    },

    '& button': {
      left: '-15px',
      opacity: 0,
      transition: 'all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)',

      '&.animate': {
        opacity: 1,
        left: '5px'
      }
    }
  },

  t1: {
    top: '10px',
    opacity: 0,
    transition: 'all 600ms cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animate': {
      opacity: 1,
      top: '0px'
    }
  },

  t2: {
    top: '10px',
    opacity: 0,
    transition: 'all 600ms cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animate': {
      opacity: 1,
      top: '0px'
    }
  }
}));
