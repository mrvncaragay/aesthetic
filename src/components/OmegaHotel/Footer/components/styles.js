import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  slideUp: {
    top: '15px',
    opacity: 0,
    transition: theme.transition.main,

    '&.animate': {
      opacity: 1,
      top: '0px'
    }
  },

  slideRightIcon: {
    left: '-15px',
    opacity: 0,
    transition: theme.transition.main,

    '&.animate': {
      opacity: 1,
      left: '5px'
    }
  },

  slideUpIcon: {
    top: '15px',
    opacity: 0,
    transition: theme.transition.main,
    padding: 0,

    '&.animate': {
      opacity: 1,
      top: '0px'
    }
  },

  rotateIcon: {
    transform: 'rotateY(90deg)',
    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      transform: 'rotateY(0deg)'
    }
  },

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
      transition: theme.transition.main
    },

    '& $circle.animate': {
      width: '30px',
      height: '30px'
    },

    '& h4': {
      position: 'absolute',
      color: 'black'
    }
  },

  circle: {}
}));
