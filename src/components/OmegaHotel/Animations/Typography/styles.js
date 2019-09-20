import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    top: '0px',
    left: '0px',
    opacity: 1
  },

  slideUp: {
    top: '15px',
    opacity: 0,
    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      opacity: 1,
      top: '0px'
    }
  },

  SlideUpAndDown: {
    top: '80%',

    '&.animate': {
      animation: '$suad 1300ms ease-in-out 300ms'
    }
  },

  '@keyframes suad': {
    '0%': { top: '80%' },
    '30%': { top: '0%' },
    '60%': { top: '0%' },
    '100%': { top: '80%' }
  },

  slideDown: {
    top: props => `-${props.top}px`,
    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      top: '0px'
    }
  },

  exitSlideDown: {
    top: '0px',
    transition: props => theme.transition.leave(400, props.leave),

    '&.animate': {
      top: props => `${props.top}px`
    }
  },

  exitSlideRight: {
    left: 0,
    opacity: 1,
    transition: props => theme.transition.leave(800, props.leave - 350),

    '&.animate': {
      opacity: 0,
      left: 600
    }
  },

  enterSlideRight: {
    left: '-600px',
    transition: theme.transition.slide(),

    '&.animate': {
      left: 0
    }
  },

  enterShrinkLetterSpace: {
    letterSpacing: '15px',
    opacity: 0,
    transition: theme.transition.main(2000),

    '&.animate': {
      letterSpacing: '3px',
      opacity: 1
    }
  },

  container: {
    overflow: 'hidden',
    display: props => props.display,

    '& h1, h2, h3, h4, h5, h6': {
      position: 'relative'
    }
  }
}));
