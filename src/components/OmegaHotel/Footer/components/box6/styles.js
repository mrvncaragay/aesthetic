import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  box: {
    position: 'relative',
    // width: '18.66666%',
    top: '-245px',
    height: '390px',
    display: 'flex',
    width: '18.4%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    color: 'black',
    backgroundColor: 'white',

    transition: 'all 1s  cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animate': {
      height: '100%',
      // width: '18.4%',
      top: '0px',
      opacity: 1
    }
  },

  title: {
    overflow: 'hidden',

    '& h3': {
      fontWeight: 600,
      position: 'relative'
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
      lineHeight: '15px'
    }
  },

  t1: {
    top: '15px',
    transition: 'all 600ms cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animate': {
      top: '0px'
    }
  },

  t2: {
    top: '30px',
    transition: 'all 600ms cubic-bezier(0.25, 0.45, 0.45, 0.95)',

    '&.animate': {
      top: '0px'
    }
  }
}));
