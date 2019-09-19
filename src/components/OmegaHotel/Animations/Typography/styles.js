import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    top: '0px',
    left: '0px'
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

  slideDown: {
    top: props => `-${props.top}px`,
    transition: props => theme.transition.main(props.duration),

    '&.animate': {
      top: '0px'
    }
  },

  exitSlideDown: {
    top: '0px',
    transition: props => theme.transition.leave(props.leave),

    '&.animate': {
      top: props => `${props.top}px`
    }
  },

  exitSlideRight: {
    left: 0,
    transition: props => theme.transition.leave(props.leave),

    '&.animate': {
      left: 600
    }
  },

  enterSlideRight: {
    left: '-600px',
    transition: `left 600ms cubic-bezier(0.25, 0.45, 0.45, 0.95)`,

    '&.animate': {
      left: 0
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
